"use client";
import React from "react";
import ApartmentDetails from "../components/ApartmentDetails";
import Footer from "../components/Footer";
import Header from "../components/ApartmentDetails/Header";



const ApartmentDetailPage = ({data}) => {
  const ApartmentDetailLink = [{ name: "Neighborhood page" }];
  return (
    <>
      <Header ApartmentDetailLink={ApartmentDetailLink} MainLinks={undefined} />
      {<ApartmentDetails data={data}/>}
      <Footer />
    </>
  );     
};

export default ApartmentDetailPage;
