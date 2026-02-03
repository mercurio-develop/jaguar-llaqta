import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { success: false, message: "Payment processing coming soon" },
    { status: 503 }
  );
}
