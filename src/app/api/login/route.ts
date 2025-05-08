import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from the login route",
  });
}
export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Simulate a login process
  if (username === "admin@ecnv.com" && password === "password") {
    return NextResponse.json({
      message: "Login successful",
    });
  } else {
    return NextResponse.json(
      {
        message: "Invalid credentials",
      },
      { status: 401 }
    );
  }
}
