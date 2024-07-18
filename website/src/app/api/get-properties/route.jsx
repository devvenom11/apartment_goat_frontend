const axios = require("axios");
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { slug, page, filter } = await req.json();
    const parameters = filter ? filter : page ? page : "";
    let data = JSON.stringify({
      source: "universal",
      parse: true,
      parsing_instructions: {
        properties: {
          _fns: [
            {
              _fn: "css",
              _args: ["li.mortar-wrapper"],
            },
          ],
          _items: {
            title: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["div.property-title"],
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
                  _args: ["div.property-address"],
                },
                {
                  _fn: "element_text",
                },
              ],
            },
            price: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["p.property-pricing"],
                },
                {
                  _fn: "element_text",
                },
              ],
            },
            beds: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["p.property-beds"],
                },
                {
                  _fn: "element_text",
                },
              ],
            },
            id: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["a.property-link"],
                },
              ],
            },
            price_range: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["div.price-range"],
                },
                {
                  _fn: "element_text",
                },
              ],
            },
            title_alt: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["p.property-title"],
                },
                {
                  _fn: "element_text",
                },
              ],
            },
            image: {
              _fns: [
                {
                  _fn: "css_one",
                  _args: ["div.carouselInner"],
                },
                {
                  _fn: "css_one",
                  _args: ["div.item"],
                },
              ],
            },
          },
        },
        total: {
          _fns: [
            {
              _fn: "css_one",
              _args: ["p.searchResults"],
            },
            {
              _fn: "element_text",
            },
          ],
        },
      },
      url: `https://www.apartments.com/${slug}/${parameters}`,
      context: [
        {
          key: "follow_redirects",
          value: true,
        },
      ],
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://realtime.oxylabs.io/v1/queries",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic QXBhcnRtZW50R29hdHNfVGlLeEg6SnVuYWlkXzEyMzQ1",
      },
      data: data,
    };

    const res = await axios.request(config);
    return NextResponse.json(
      {
        data: {
          properties: res.data.results[0].content.properties,
          total: res.data.results[0].content.total,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
