"use client";

// Shared building blocks for the English "explorables". Mobile-first: every
// tappable thing is at least 40px tall, and every control has a text label.

export function Frame({ title, emoji = "🕹️", children, caption }: { title: string; emoji?: string; children: React.ReactNode; caption: React.ReactNode }) {
  return (
    <section aria-label={title} className="my-3 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/70 to-white p-3 sm:p-4">
      <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-indigo-800">
        <span aria-hidden>{emoji}</span> {title}
      </h3>
      {children}
      <div className="mt-4 rounded-xl bg-white/80 p-3 text-sm leading-relaxed text-slate-700 ring-1 ring-indigo-100">
        <span className="font-bold text-indigo-700">The idea: </span>
        {caption}
      </div>
    </section>
  );
}

export function Slider({ label, min, max, value, onChange, suffix = "" }: { label: string; min: number; max: number; value: number; onChange: (n: number) => void; suffix?: string }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span className="tabular-nums text-indigo-600">{value}{suffix}</span>
      </span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(+e.target.value)} className="mt-1 h-10 w-full accent-indigo-600" />
    </label>
  );
}

/** A toggle/choice button. `on` shows the selected state (and sets aria-pressed). */
export function Chip({ on = false, onClick, children, className = "", label, disabled }: { on?: boolean; onClick: () => void; children: React.ReactNode; className?: string; label?: string; disabled?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={`min-h-10 rounded-xl px-3 py-2 text-left text-sm font-semibold transition disabled:opacity-50 ${
        on ? "bg-indigo-600 text-white shadow-sm" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-indigo-50"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/** A plain action button (not a toggle). */
export function Action({ onClick, children, tone = "dark", disabled, className = "" }: { onClick: () => void; children: React.ReactNode; tone?: "dark" | "light" | "green"; disabled?: boolean; className?: string }) {
  const tones = {
    dark: "bg-slate-800 text-white hover:bg-slate-700",
    light: "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50",
    green: "bg-emerald-600 text-white hover:bg-emerald-500",
  };
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`min-h-10 rounded-xl px-4 py-2 text-sm font-semibold transition disabled:opacity-40 ${tones[tone]} ${className}`}>
      {children}
    </button>
  );
}

/** A labelled horizontal meter, 0–max. */
export function Meter({ label, value, max, color, note }: { label: string; value: number; max: number; color: string; note?: string }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2 text-sm">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="text-xs tabular-nums text-slate-500">{note ?? `${Math.round(pct)}%`}</span>
      </div>
      <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-200" role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

/** Coloured feedback box. */
export function Note({ tone = "info", children }: { tone?: "good" | "ok" | "bad" | "info"; children: React.ReactNode }) {
  const tones = {
    good: "border-emerald-300 bg-emerald-50 text-emerald-900",
    ok: "border-amber-300 bg-amber-50 text-amber-900",
    bad: "border-rose-300 bg-rose-50 text-rose-900",
    info: "border-sky-200 bg-sky-50 text-sky-900",
  };
  return <div className={`rounded-xl border-l-4 p-3 text-sm leading-relaxed ${tones[tone]}`} role="status">{children}</div>;
}

/** Small uppercase step label. */
export function Step({ n, children }: { n?: number | string; children: React.ReactNode }) {
  return (
    <p className="mb-2 mt-4 text-xs font-bold uppercase tracking-wide text-slate-500 first:mt-0">
      {n !== undefined && <span className="mr-1.5 inline-grid h-5 w-5 place-items-center rounded-full bg-indigo-600 text-[11px] text-white">{n}</span>}
      {children}
    </p>
  );
}
