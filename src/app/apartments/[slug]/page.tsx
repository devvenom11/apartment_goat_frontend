import dynamic from "next/dynamic";
import { locations } from "src/utils/data";

const FindApartmentPage = dynamic(
  () => import("src/main-pages/find-apartment-page"),
  {
    ssr: false,
  }
);
export default async function Page({ params: { slug } }) {
  return <FindApartmentPage slug={slug} />;
}
export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}


// import { useEffect } from "react";
// import dynamic from "next/dynamic";
// import { locations } from "src/utils/data";
// const FindApartmentPage = dynamic(
//   () => import("src/main-pages/find-apartment-page"),
//   {
//     ssr: false, 
//   }
// );


// async function fetchLocationData(latitude, longitude) {
//   try {
//     const response = await fetch(
//       `/api/search-geo`
//     );

//     const data = await response.json();
//     console.log("API Response Data:", data); 

//     return data;
//   } catch (error) {
//     console.error("Error fetching location data:", error);
//     return null;
//   }
// }

// export default function Page({ params: { slug } }) {
//   useEffect(() => {

//     const location = locations.find((loc) => loc.slug === slug);

//     if (location) {
//       const { latitude, longitude } = location;

//       async function getLocationData() {
//         const locationData = await fetchLocationData(latitude, longitude); 

//         if (locationData) {
//           if (latitude && longitude) {
//             console.log("Latitude and longitude are coming from the API:", {
//               latitude,
//               longitude,
//             });
//           } else {
//             console.log(
//               "Latitude and longitude are missing in the API response."
//             );
//           }
//         } else {
//           console.log("Failed to fetch location data from the API.");
//         }
//       }

//       getLocationData(); 
//     } else {
//       console.error("Location not found for the slug:", slug);
//     }
//   }, [slug]); 

//   return <FindApartmentPage slug={slug} />;
// }

// export async function generateStaticParams() {

//   return locations.map((location) => ({
//     slug: location.slug,
//   }));
// }
