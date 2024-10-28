import { NextResponse } from "next/server";

// The GET method for handling the API request
export async function GET(req: Request, { params }: { params: { building_id: string; unit_id: string } }) {
  try {
    const { building_id, unit_id } = params;

 
        const apiUrl = new URL( `https://api.dibze.com/api/v1/unit/${building_id}/${unit_id}`);

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

    // If the API returns 404 with "No results found", return an empty array
    if (data.code === 404 && data.message === "No results found") {
      return NextResponse.json({ results: [] }, { status: 200 });
    }
 
    // Return the API response in JSON format
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
