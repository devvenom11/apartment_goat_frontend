import { API_URL, GOOGLE_MAP_API_KEY } from "./constants";
import axios from "axios";
export const getElementVisibility = (element) => {
  if (typeof window === "undefined") return;

  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = element?.offsetTop;
  const elementHeight = element?.offsetHeight;

  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = Math.round(
    distance / ((viewportHeight + elementHeight) / 100)
  );

  return Math.min(100, Math.max(0, percentage));
};

export async function getData(
  slug,
  fetchAll,
  filters = [],
  page = 1,
  sort,
  pageSize = 5
) {
  try {
    let queryString = ``;
    filters.forEach((filter) => (queryString += `&${filter}`));
    if (fetchAll) {
      queryString += `&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
      if (sort) {
        queryString += `&sort=Price:${sort === "highToLow" ? "desc" : "asc"}`;
      }
    }
    const res = await fetch(
      `/api/search-geo${slug}${queryString}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    return { error: "500 internal server error" };
  }
}

export async function getMinimalProperties() {
  try {
    const res = await axios.get(`${API_URL}/api/properties?fields[0]=slug`);
    return res.data;
  } catch (err) {
    return { error: "500 internal server error" };
  }
}

export async function getProperty({ slug }) {
  try {
    const res = await axios.get(
      `${API_URL}/api/properties?populate=*&filters[slug][$eq]=${slug}`
    );
    return res.data;
  } catch (err) {
    return { error: "500 internal server error" };
  }
}

export async function getBlogs(slug) {
  try {
    const res = await fetch(
      slug
        ? `${API_URL}/api/blogs?populate=*&filters[Slug][$eq]=${slug}`
        : `${API_URL}/api/blogs?fields[3]=updatedAt&fields[0]=title&fields[1]=slug&populate[Image][fields][0]=name&populate[Image][fields][1]=url&populate[blog_category]=blog_category`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    return { error: "500 internal server error" };
  }
}

export async function getFilterBlogs(filter) {
  try {
    const res = await fetch(
      `${API_URL}/api/blogs?filters[blog_category][Title]=${filter}&populate=*`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (err) {
    return { error: "500 internal server error" };
  }
}
// export async function getUser() {
//   try {
//     const res = await fetch(
//       `${API_URL}/api/users/?populate=*`
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   } catch (err) {
//     return { error: "500 internal server error" };
//   }
// }

export const getFilteredNeighborhoods = (neighborhoods, inputValue) => {
  return neighborhoods.filter((option) =>
    option.name.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export async function getLatLong(address) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAP_API_KEY}`
    );
    return response.data.results[0].geometry.location;
  } catch (err) {
    return { error: "500 internal server error" };
  }
}

export async function getImages(id) {
  try {
    const imgRes = await fetch(
      `${API_URL}/api/properties?populate=*&filters[Slug][$eq]=${id}`
    );
    const imgesRes = imgRes.json();

    return imgesRes;
  } catch (err) {
    return { error: "500 internal server error" };
  }
}
export async function getPages(query) {
  try {
    const res = await fetch(`${API_URL}/api/${query}`);
    const faqsRes = res.json();
    return faqsRes;
  } catch (err) {
    return { error: "500 internal server error" };
  }
}

export const extractId = (htmlString) => {
  const regex = /href="https:\/\/www\.apartments\.com\/[^\/]+\/([^\/]+)\/"/;
  const match = regex.exec(htmlString);
  return match && match.length > 1 ? match[1] : null;
};

export const extractImage = (html) => {
  const pattern = /<img\s+[^>]*src="([^"]+)"/;
  const match = html?.match(pattern);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};
export const extractSlugAndId = (htmlString) => {
  // const regex = /href="https:\/\/www\.apartments\.com([^"]+)"/;
  // const match = htmlString?.match(regex);
  // if (!match) return "#";
  // const urlPath = match[1].slice(0, match[1].length - 1);
  // const lastSlashIndex = urlPath.lastIndexOf("/");
  // const basePath = urlPath.substring(0, lastSlashIndex);
  // const idPart = urlPath.substring(lastSlashIndex + 1);
  // return `${basePath}?id=${idPart}`;
};


export const toTitleCase = (str) => {
  return str.replace(/([A-Z])/g, ' $1') // Insert space before capital letters
            .replace(/^./, (char) => char.toUpperCase()); // Capitalize the first letter
};
export const convertToCamelCase = (str) => {
  return str
    .split('-') // Split the string into parts
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each part
    .join(''); // Join the parts back together
};  