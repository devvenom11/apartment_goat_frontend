"use client";
import React, { useState, useEffect } from "react";
import ApartmentDetails from "../components/ApartmentDetails";
import Footer from "../components/Footer";
import Header from "../components/ApartmentDetails/Header";
import { useSearchParams } from "next/navigation";
import { TabsHeader } from "../components/ApartmentDetails/TabsHeader";
import LoadingPage from "../components/common/LoadingPage";
const ApartmentDetailPage = ({ slug }) => {
  const ApartmentDetailLink = [{ name: "Neighborhood page" }];
  const searchParams = useSearchParams();
  const unit_id = searchParams.get("unit_id");
  const building_id = searchParams.get("building_id");
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [units, setUnits] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);
  const [page, setPage] = useState(1);
  const [nearByProperties, setNearByProperties] = useState();

  const apartmentDetail = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/apartment-detail/${building_id}/${unit_id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setProperties(data);
    } catch (err) {
      console.error("error", err);
    } finally {
      setLoading(false);
    }
  };

  const searchBuildings = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        id: building_id,
        city: "Chicago",
        page: page.toString(),
        limit: "20",
      });
      const response = await fetch(`/api/search-building?${queryParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUnits(data);
      localStorage.setItem(
        "property-detail",
        JSON.stringify(data?.results?.[0])
      );
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };
  const latitude = properties?.latitude;
  const longitude = properties?.longitude;

  const fetchDataByLatLng = async () => {
    try {
      const queryParams = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        radius: 15,
        page,
        limit: 20 
      });
      setLoading(true);
      const response = await fetch(`/api/search-geo?${queryParams}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      setNearByProperties(result.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchBuildings();
    apartmentDetail();
  }, []);

  useEffect(() => {
    if (
      properties?.latitude &&
      properties?.longitude
    ) {
      fetchDataByLatLng();
    }
  }, [properties]);

  return (
    <>
      <Header
        ApartmentDetailLink={ApartmentDetailLink}
        MainLinks={undefined}
        isFixed
      />
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <TabsHeader showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
          <ApartmentDetails
            showNavbar={showNavbar}
            data={properties }
            units={units}
            nearByProperties={nearByProperties}
          />
        </>
      )}
      <Footer />
    </>
  );
};

export default ApartmentDetailPage;
