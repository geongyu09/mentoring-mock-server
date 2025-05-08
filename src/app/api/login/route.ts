import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from the login route",
  });
}
export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (!username || !password) {
    return NextResponse.json(
      {
        message: "올바르지 않은 요청입니다.",
      },
      { status: 401 }
    );
  }

  if (username === "ecnv@ecnv.com" && password === "password") {
    return NextResponse.json(
      {
        message: "로그인 성공",
      },
      { status: 200 }
    );
  }

  return NextResponse.json(
    {
      message: "존재하지 않는 사용자입니다.",
    },
    { status: 401 }
  );
}
