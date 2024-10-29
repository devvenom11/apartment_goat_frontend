"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Main from "src/components/FindApartments/main";
import { convertToCamelCase } from "src/utils/helpers";

export default function FindApartment({ slug }) {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const bedCount = searchParams.get("beds");
  const amenities = searchParams.get("amenity");
  const searchParamValue = searchParams.get("search");
  const [properties, setProperties] = useState(null);
  const [bed, setBed] = useState("");
  const [parkingToggled, setParkingToggled] = useState(false);
  const [petToggled, setPetToggled] = useState(false);
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");
  const [reset, setReset] = useState(0);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ page: 1 });
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredProperties, setFilteredProperties] = useState();
  const [filters, setFilters] = useState({
    // balcony: true,
    // basketballCourt: true,
    bathCount: "1",
    bedroomCount: (bedCount == "studio" ? "0" : bedCount) || "1",
    // den: true,
    // evCharging: true,
    // fitnessCenter: true,
    // floor2CeilWindows: true,
    // frontDesk: true,
    // pool: true,
    building_amenities: {
      parking: true,
      doorman: true,
      petFriendly: true,
      garageParking: true,
      dogPark: true,
      smokeFree: true,
      // 247FrontDesk: true,
      laundry: true,
      inUnitLaundry: true,
      hardwoodFloors: true,
      dishwasher: true,
    },
  });

  async function fetchDataByLatLng() {
    try {
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      );

      const queryParams = new URLSearchParams({
        latitude: lat,
        longitude: lng,
        radius: 50,
        page,
        limit: 20,
        ...(minPrice && minPrice !== "0" ? { priceMin: minPrice } : {}),
        ...(maxPrice && maxPrice !== "10000" ? { priceMax: maxPrice } : {}),
        ...cleanedFilters,
      });
      setLoading(true);
      const response = await fetch(`/api/search-geo?${queryParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      // setAllProperties(res_all.data);
      setProperties(result.results);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchDataByAmenity() {
    try {
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      );
      const queryParams = new URLSearchParams({
        amenities: amenities,
        city: "Chicago",
        page,
        limit: 20,
        ...cleanedFilters,
      });
      setLoading(true);
      const response = await fetch(`/api/search-amenity?${queryParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      // setAllProperties(res_all.data);
      setProperties(result.results);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchDataByPopularSearch() {
    try {
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      );
      const queryParams = new URLSearchParams({
        best: searchParamValue,
        city: "Chicago",
        page,
        limit: 20,
        ...cleanedFilters,
      });
      setLoading(true);
      const response = await fetch(`/api/search-best?${queryParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      // setAllProperties(res_all.data);
      setProperties(result.results);
      setPagination(result.pagination);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  const fetchDataByNeighborhood = async () => {
    try {
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      );
      const queryParams = new URLSearchParams({
        neighborhood: convertToCamelCase(slug),
        city: "Chicago",
        page,
        limit: 20,
        ...(minPrice && minPrice !== "0" ? { priceMin: minPrice } : {}),
        ...(maxPrice && maxPrice !== "10000" ? { priceMax: maxPrice } : {}),
        ...cleanedFilters,
      });
      setLoading(true);
      const response = await fetch(`/api/search-neighborhood?${queryParams}`);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setProperties(data.results);
      setPagination(data.pagination);
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataByCity = async () => {
    try {
      const cleanedFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== undefined && value !== "" && value !== null
        )
      );
      const queryParams = new URLSearchParams({
        city: "Chicago",
        page,
        limit: "20",
        ...(minPrice && minPrice !== "0" ? { priceMin: minPrice } : {}),
        ...(maxPrice && maxPrice !== "10000" ? { priceMax: maxPrice } : {}),
        ...cleanedFilters,
      });
      setLoading(true);
      const response = await fetch(
        `/api/search-city?${queryParams.toString()}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      setProperties(data.results);
      setPagination(data.pagination);
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParamValue) {
      fetchDataByPopularSearch();
    } else if (amenities) {
      fetchDataByAmenity();
    } else if (lat && lng) {
      fetchDataByLatLng();
    } else if (slug === "chicago") {
      fetchDataByCity();
    } else {
      fetchDataByNeighborhood();
    }
  }, [lat, lng, filters, minPrice, maxPrice, filters]);

  // useEffect(() => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     bedroomCount: bedCount,
  //   }));
  // }, [bedCount]);

  const uniqueProperties = properties?.filter((property, index, self) => {
    const duplicates = self.filter((p) => p.id === property.id);
    const nonNullPriceItem = duplicates.find((item) => item.price !== null);
    return nonNullPriceItem
      ? property === nonNullPriceItem
      : index === self.findIndex((p) => p.id === property.id);
  });

  return (
    <Main
      loading={loading}
      setSort={setSort}
      sort={sort}
      pagination={pagination}
      page={page}
      setPage={setPage}
      filters={filters}
      setFilters={setFilters}
      bed={bed}
      setMaxPrice={setMaxPrice}
      setMinPrice={setMinPrice}
      minPrice={minPrice}
      maxPrice={maxPrice}
      propertiesData={filteredProperties}
      properties={uniqueProperties}
      setBed={setBed}
      setPetToggled={setPetToggled}
      setParkingToggled={setParkingToggled}
      petToggled={petToggled}
      parkingToggled={parkingToggled}
      // checkedItems={checkedItems}
      setReset={setReset}
      reset={reset}
      inputValue={inputValue}
      setInputValue={setInputValue}
      lat={lat}
      lng={lng}
      slug={slug}
    />
  );
}
