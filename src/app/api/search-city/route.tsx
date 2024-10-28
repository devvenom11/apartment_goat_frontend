import { NextResponse } from "next/server";

// The GET method for handling the API request
export async function GET(req: Request) {
  try {
    // Extract search parameters from the URL
    const { searchParams } = new URL(req.url);
    const neighborhood = searchParams.get("neighborhood") || "";
    const city = searchParams.get("city") || "";
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "20";

    // Log the parameters for debugging
    console.log("Request Parameters:", { city, page, limit });

    // Construct the external API URL
    const apiUrl = new URL("https://api.dibze.com/api/v1/search/city");
    apiUrl.searchParams.append("city", city);
    apiUrl.searchParams.append("page", page);
    apiUrl.searchParams.append("limit", limit);

    // Log the full API URL for debugging
    console.log("External API URL:", apiUrl.toString());

    // Fetch data from the external API
    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": "pk_live_51Abcd1234EfghIjklMnop5678", // Replace with your real API key
      },
    });

    // Check if the external API response is not OK
    if (!response.ok) {
      const errorText = await response.text(); // Get the response error message
      console.error("External API Error:", errorText);
      return NextResponse.json(
        { error: `Failed to fetch data: ${response.statusText}` },
        { status: response.status }
      );
    }

    // Parse and return the successful response
    const data = await response.json();
    if (data.code === 404 && data.message === "No results found") {
      // If the API returns 404 with "No results found", return an empty array
      return NextResponse.json({ results: [] }, { status: 200 });
    }
    if (!response.ok) {
      console.error("External API Error:", data.message);
      return NextResponse.json(
        { error: `Failed to fetch data: ${response.statusText}` },
        { status: response.status }
      );
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error("Server Error:", error);

    // Return a 500 error response with the error message
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
