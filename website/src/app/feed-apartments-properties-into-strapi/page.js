"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { extractImage, getLatLong, uploadImages } from "../../utils/helpers";
import { API_URL, authToken } from "../../utils/constants";

const Page = () => {
  const [attempt, setAttempt] = useState(0);
  const renter_requirements = [1];
  const safety_and_access = [1, 2, 3];
  const unit_feature = [1, 2, 3, 4, 5, 6, 8, 9, 10, 20];
  const pet_polices = [2];
  const recreation = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const eligibility_requirements = [7, 8, 9, 10, 11, 12];
  const facilities = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const policies = [4, 5, 6];
  const faqs = [11, 12, 13, 14, 15, 16, 17];
  const lease_detail = [1];
  useEffect(() => {
    const getData = async () => {
      let res = await axios.post("/api/get-properties", {
        slug: `apartments/streeterville-chicago-il`,
      });
      const properties = res.data.data.properties;
      properties.forEach((element, index) => {
        setTimeout(() => {
          getProperty(element);
        }, 3000 * index);
      });
    };
    if (attempt > 0) getData();
    setAttempt(1);
  }, [attempt]);

  const getProperty = async (element) => {
    let res = await axios.post("/api/get-property", {
      slug: getHrefFromString(element.id),
    });
    const singleProperty = res.data.data;
    createProperty(singleProperty, element);
  };
  const getImagesId = async () => {
    let res = await axios.get(`${API_URL}/api/upload/files`);
    const ids = res.json();
    console.log("id res", ids);
  };

  const createProperty = async (property, element) => {
    console.log("Property single", property);
    const title = property.title ?? property.title_alt;
    const address = property.address || property.title || properties.title_alt;
    const images = property?.images?.map((img) => extractImage(img));

    try {
      const location = await getCoordinates(address);
      const uploadedImages = await uploadingImages(images);

      const payload = {
        name: title,
        slug: `${stringToSlug(title)}${extractId(element.id)}`,
        description: property.description,
        website: getHrefFromString(property.website, true),
        address: property.address.replaceAll("Property Address :", ""),
        min_price:
          parsePropertyData(property.propertyInfo).price.split("-")[0] || "",
        max_price:
          parsePropertyData(property.propertyInfo).price.split("-")[1] || "",
        available_dates: new Date(),
        highlights: property.highlights?.join(" ") || "",
        hours: property.hours,
        longitude: location.lng,
        latitude: location.lat,
        price: parsePropertyData(property.propertyInfo).price,
        phone: property.phone,
        beds: parsePropertyData(property.propertyInfo).beds || "",
        baths: parsePropertyData(property.propertyInfo).baths || "",
        neighborhood: "streeterville",
        offers: "",
        amenities: property.amenities
          .slice(0, 4)
          .map((item) => ({ title: item })),
        pet: true,
        parking: true,
        area: parsePropertyData(property.propertyInfo).area,
        photos: uploadedImages?.map((item) => item.id),
        units: parseUnitGridHTML(property.units),
        safety_and_accesses: generateRandomStrings(safety_and_access, 2),
        unit_features: generateRandomStrings(unit_feature, 3),
        pet_policies: generateRandomStrings(pet_polices, 1),
        recreations: generateRandomStrings(recreation, 4),
        eligibility_requirements: generateRandomStrings(
          eligibility_requirements,
          2
        ),
        facilities: generateRandomStrings(facilities, 5),
        policies: generateRandomStrings(policies, 1),
        faqs: generateRandomStrings(faqs, 3),
        lease_details: generateRandomStrings(lease_detail, 1),
        renter_requirements: generateRandomStrings(renter_requirements, 1),
      };
      console.log("Property PAyload", payload);
      await axios.post(`${API_URL}/api/properties`, {
        data: payload,
      });
    } catch (err) {
      console.error("Failed to create property for ---", title, "------", err);
    }
  };

  const uploadingImages = async (images) => {
    try {
      const formData = new FormData();
      // Iterate over each image URL in the array
      for (let i = 0; i < images.length; i++) {
        const url = await images[i];
        const response = await fetch(url);
        const blob = await response.blob();
        const filename = url.split("/").pop().split("?")[0];
        formData.append("files", blob, filename);
      }

      const res = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const imagesRes = await res.json();
      return imagesRes;
    } catch (err) {
      console.error("Error:", err);
      return { error: "500 internal server error" };
    }
  };

  const getCoordinates = async (address) => {
    try {
      const location = await getLatLong(address);
      return {
        lat: location.lat,
        lng: location.lng,
      };
    } catch (error) {
      console.error("Failed to fetch lat/long for address:", error);
      return "";
    }
  };

  const extractId = (htmlString) => {
    // Create a DOM parser to parse the HTML string
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    // Select the anchor element
    const anchor = doc.querySelector("a.property-link");

    // Get the href attribute
    const href = anchor.getAttribute("href");

    // Extract the ID using regex
    const idMatch = href.match(/\/([^\/]+)\/$/);
    const id = idMatch ? idMatch[1] : null;

    return id ?? "";
  };

  return null;
};

function getHrefFromString(htmlString, flag) {
  // Create a new DOM parser
  const parser = new DOMParser();
  // Parse the HTML string into a document
  const doc = parser.parseFromString(htmlString, "text/html");
  // Find the anchor element
  const anchor = doc.querySelector("a");
  // Return the href attribute value
  const href = anchor ? anchor.href : null;
  if (flag) return href || null;

  if (href) {
    // Extract the part of the URL after 'apartments.com/'
    const urlPart = href.split("apartments.com/")[1];
    return urlPart || null;
  }

  return null;
}

function stringToSlug(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/[\s\W-]+/g, "-") // Replace spaces and special characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}

function parsePropertyData(dataString) {
  const lines = dataString
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  const propertyData = {
    price: lines[1],
    beds: lines[3],
    baths: lines[5],
    area: lines[7],
  };

  return propertyData;
}
function generateRandomStrings(array, count) {
  if (array.length <= count) {
    return array; // If array length is less than or equal to count, return the whole array
  }

  let pickedElements = [];
  let usedIndices = new Set();

  while (pickedElements.length < count) {
    let randomIndex = Math.floor(Math.random() * array.length);

    // Ensure no duplicate indices
    if (!usedIndices.has(randomIndex)) {
      pickedElements.push(array[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return pickedElements;
}

function parseUnitGridHTML(htmlString) {
  // Create a temporary DOM element to hold the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  // Select all unit containers
  const unitContainers = tempDiv.querySelectorAll(".unitContainer");

  // Initialize the array to hold the parsed data
  const units = [];
  // Iterate over each unit container to extract data
  unitContainers.forEach((unitContainer) => {
    const unit = {};

    // Extract unit name
    unit.Name =
      unitContainer
        .querySelector(".unitColumn .unitBtn span[title]")
        ?.getAttribute("title") || "";

    // Extract area (sq ft)
    unit.Area =
      unitContainer
        .querySelector(".sqftColumn span:not(.screenReaderOnly)")
        ?.textContent.trim() || "";

    // Extract price
    unit.Price =
      unitContainer
        .querySelector(".pricingColumn span:not(.screenReaderOnly)")
        ?.textContent.trim() || "";

    // Extract availability date
    unit.Availability =
      unitContainer
        .querySelector(".availableColumn span:not(.screenReaderOnly)")
        ?.textContent.replace("availibility", "")
        .trim() || "";

    // Extract bed and bath values from the .detailsLabel within .pricingGridItem
    unit.Bed = unitContainer.getAttribute("data-beds") || "";
    unit.Bath = unitContainer.getAttribute("data-baths") || "";

    // Add the unit object to the units array
    units.push(unit);
  });

  return units;
}

export default Page;
