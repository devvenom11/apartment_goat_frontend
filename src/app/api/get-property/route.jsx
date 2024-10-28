const axios = require("axios");
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { slug } = await req.json();
    let data = JSON.stringify({
      source: "universal",
      parse: true,
      parsing_instructions: {
        title: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["h1#propertyName"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        website: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["a.propertyWebsiteLink"],
            },
          ],
        },
        phone: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.phoneNumber"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        faqs: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["section#frequentlyAskedQuestionSection"],
            },
          ],
        },
        amenities: {
          _fns: [
            {
              _fn: "css",
              _args: ["div.amenityCard"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        hours: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.todaysHoursContactContainer"],
            },
            {
              _fn: "element_text",
            },
          ],
        },

        lastUpdate: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["span.lastUpdated"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        tagline: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.propertyAddressContainer"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        highlights: {
          _fns: [
            {
              _fn: "css",
              _args: ["li.uniqueAmenity"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        priceBedRangeInfo: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["ul.priceBedRangeInfo"],
            },
          ],
        },
        disclaimer: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.disclaimerInfoSection"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        description: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["section.descriptionSection"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        address: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.propertyAddress"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        neighbourhoods: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.overView"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        propertyInfo: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.priceBedRangeInfoContainer"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        phoneNumber: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.phoneNumber"],
            },
            {
              _fn: "element_text",
            },
          ],
        },

        transportation: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["p.sectionDescription"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        feature: {
          _fns: [
            {
              _fn: "css",
              _args: ["li.specInfo"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
        images: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.carouselContent"],
            },
            {
              _fn: "css",
              _args: ["div.aspectRatioImage"],
            },
          ],
        },
        units: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["div.tab-section"],
            },
          ],
        },
      },

      url: `https://www.apartments.com/${slug}`,
      context: [
        {
          key: "follow_redirects",
          value: true,
        },
      ],
    });
    let credentials = "ApartmentGoats_TiKxH_FUCU1:Junaid_12345"; // Replace with your new Oxylabs username and password
    let base64Credentials = Buffer.from(credentials).toString("base64");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://realtime.oxylabs.io/v1/queries",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Basic QXBhcnRtZW50R29hdHNfVGlLeEg6SnVuYWlkXzEyMzQ1",
        Authorization: `Basic ${base64Credentials}`,

      },
      data: data,
    };

    const res = await axios.request(config);
    return NextResponse.json(
      { data: res.data.results[0].content },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
