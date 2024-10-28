import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const apiUrl = new URL(
      "https://api.dibze.com/api/v1/search/building"
    );

    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": "pk_live_51Abcd1234EfghIjklMnop5678", 
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Failed to fetch data: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
