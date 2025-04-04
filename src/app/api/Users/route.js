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

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, contact } = body;
    console.log("request body data", name);
    console.log("request body data", contact);
    if (!name || !contact) {
      return NextResponse.json({ error: "name or contact required" });
    }

    const result = await query(
      `INSERT INTO users (name,contact) VALUES($1,$2) RETURNING *`,
      [name, contact]
    );
    return NextResponse.json({
      message: "User added successfully",
      user: result[0],
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
