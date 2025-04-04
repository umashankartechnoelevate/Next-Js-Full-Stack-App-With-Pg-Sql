import { query } from "../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await query("SELECT * FROM users");
    console.log("users from db", users);
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
