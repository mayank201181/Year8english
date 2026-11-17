import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const modules = new Map();

function load(file) {
  if (modules.has(file)) return modules.get(file).exports;
  const source = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const loadedModule = { exports: {} };
  modules.set(file, loadedModule);
  const require = (name) => {
    const base = name.startsWith('@/') ? path.join(ROOT, name.slice(2)) : path.resolve(path.dirname(file), name);
    for (const ext of ['.ts', '.tsx', '/index.ts']) if (existsSync(base + ext)) return load(base + ext);
    throw Error(`Unexpected test dependency ${name}`);
  };
  vm.runInNewContext(source, { exports: loadedModule.exports, module: loadedModule, require }, { filename: file });
  return loadedModule.exports;
}

const { ALL_TOPICS } = load(path.join(ROOT, 'lib/topics/index.ts'));
const { COMPREHENSIVE } = load(path.join(ROOT, 'lib/comprehensive.ts'));
const { gradeQA } = load(path.join(ROOT, 'lib/grade.ts'));

const allMcqs = [
  ...ALL_TOPICS.flatMap((t) => [...t.quiz.mcq, ...t.questionBank.mcqPapers.flatMap((p) => p.questions)]),
  ...COMPREHENSIVE.mcqPapers.flatMap((p) => p.questions),
];

const allQas = [
  ...ALL_TOPICS.flatMap((t) => [...t.quiz.qa, ...t.questionBank.qaPapers.flatMap((p) => p.questions)]),
  ...COMPREHENSIVE.qaPapers.flatMap((p) => p.questions),
];

test('all 1,444 MCQs have 4 unique shuffle-safe options and valid answerIndex', () => {
  assert.equal(allMcqs.length, 1444);
  const shuffleUnsafe = /\b(all of the above|none of the above|both options|both a and b|neither a nor b)\b/i;
  for (const q of allMcqs) {
    assert.equal(q.options.length, 4, `${q.id} options length`);
    assert.ok(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < 4, `${q.id} answerIndex`);
    assert.equal(new Set(q.options.map((o) => o.trim())).size, 4, `${q.id} duplicate options`);
    for (const opt of q.options) {
      assert.ok(!shuffleUnsafe.test(opt), `${q.id} shuffle-unsafe option: ${opt}`);
    }
  }
});

test('all 872 written QAs award full marks to their modelAnswer', () => {
  assert.equal(allQas.length, 872);
  const failures = [];
  for (const qa of allQas) {
    assert.equal(qa.marks, qa.markScheme.length, `${qa.id} marks === markScheme.length`);
    const res = gradeQA(qa, qa.modelAnswer);
    if (res.hitCount !== qa.marks || res.verdict !== 'correct') {
      failures.push(`${qa.id}: ${res.hitCount}/${qa.marks}`);
    }
  }
  assert.deepEqual(failures, []);
});

test('stem-copying and cliché non-answers score 0 marks across all 872 QAs', () => {
  const nonAnswers = [
    '',
    '   ',
    "I don't know",
    'it makes the reader want to read on',
    'good words',
  ];
  for (const qa of allQas) {
    const stemRes = gradeQA(qa, qa.question);
    assert.equal(stemRes.hitCount, 0, `stem copy on ${qa.id} scored ${stemRes.hitCount}`);
    if (qa.extract) {
      const extRes = gradeQA(qa, qa.extract);
      assert.equal(extRes.hitCount, 0, `extract copy on ${qa.id} scored ${extRes.hitCount}`);
    }
    for (const probe of nonAnswers) {
      const r = gradeQA(qa, probe);
      assert.equal(r.hitCount, 0, `probe ${JSON.stringify(probe)} on ${qa.id} scored ${r.hitCount}`);
    }
  }
});

test('gradeQA does not credit antonym prefixes via suffix matching', () => {
  const sampleQa = {
    id: 'test-antonym',
    question: 'Do you agree that the tone is formal?',
    marks: 2,
    hint: '',
    modelAnswer: 'I agree because the tone is formal and mortal.',
    markScheme: [
      { point: 'States agreement', keywords: ['agree'] },
      { point: 'Identifies formal tone', keywords: ['formal'] },
    ],
    commonError: '',
  };
  const wrong = gradeQA(sampleQa, 'I disagree because the tone is informal.');
  assert.equal(wrong.hitCount, 0);
  const right = gradeQA(sampleQa, 'I agree that the register is formal.');
  assert.equal(right.hitCount, 2);
});
