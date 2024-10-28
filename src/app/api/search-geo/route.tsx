import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Extract search parameters from the request URL
    const { searchParams } = new URL(req.url);

    // Construct the external API URL
    const apiUrl = new URL("https://api.dibze.com/api/v1/search/geo");

    // Append all the query parameters from the request to the external API URL
    searchParams.forEach((value, key) => {
      apiUrl.searchParams.append(key, value);
    });

    console.log("Constructed API URL:", apiUrl.toString()); // Debugging

    // Fetch data from the external API
    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      headers: {
        "X-API-Key": "pk_live_51Abcd1234EfghIjklMnop5678", // Add your X-API-KEY here
        "Content-Type": "application/json",
      },
    });

    // Check if the external API response is successful
    if (!response.ok) {
      const errorText = await response.text(); // Get the response error message
      return NextResponse.json(
        { error: `Failed to fetch data: ${errorText}` },
        { status: response.status }
      );
    }

    // Parse the response data
    const data = await response.json();

    // Handle case where the API returns "No results found"
    if (data.code === 404 && data.message === "No results found") {
      return NextResponse.json({ results: [] }, { status: 200 });
    }

    // Return the successful response data
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    // Handle any server-side errors
    return NextResponse.json(
      { message: "Failed to fetch data", error: error.message },
      { status: 500 }
    );
  }
}
