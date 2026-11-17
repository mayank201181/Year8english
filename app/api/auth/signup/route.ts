import { NextResponse } from "next/server";
import { createAccount, publicAccount } from "@/lib/server/db";
import { signSession, SESSION_COOKIE } from "@/lib/server/auth";
import { sessionCookieOptions } from "@/lib/server/session";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Family accounts aren't switched on for this site yet. Tap \"Continue without an account\" below — progress is saved on this device." },
      { status: 503 },
    );
  }
  const { username, password, pin } = await req.json().catch(() => ({}));
  if (!username || !password || !pin) {
    return NextResponse.json({ error: "Name, password and parent PIN are all required." }, { status: 400 });
  }
  const result = await createAccount(String(username), String(password), String(pin));
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 409 });
  const res = NextResponse.json({ account: publicAccount(result.account) });
  res.cookies.set(SESSION_COOKIE, signSession(result.account.id), sessionCookieOptions());
  return res;
}
