import { NextResponse } from "next/server";
import { HOT_CAKE_API_URL } from "@/lib/urls";
import type { HotCakeInput } from "@/lib/hot-cake";

export async function POST(request: Request) {
  let body: HotCakeInput;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body" },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(`${HOT_CAKE_API_URL}/hot-cake`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to reach the server. Please try again." },
      { status: 502 },
    );
  }
}
