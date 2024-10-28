"use client";
import React from "react";
import LuxuryApartments from "../components/ArticlePage/LuxuryApartments";
import LakeViewApartments from "../components/ArticlePage/LakeViewApartments";
import Header from "../components/ApartmentDetails/Header";
import UseMoveFree from "../components/ArticlePage/UseMoveFree";
import ArticleCards from "../components/ArticlePage/ArticleCards";
import Footer from "../components/Footer"; 
import { BlogsData, articleDetail } from "src/utils/data";

const ArticlePage = ({ slug }) => {
  const MainLinks = [
    { name: "Find an apartment" },
    { name: "Chicago Neighborhoods" },
  ];

  const data = articleDetail;

  return (
    <div>
      <Header MainLinks={MainLinks} />
      <LuxuryApartments data={data} slug={slug} />
      <LakeViewApartments data={data} />
      <UseMoveFree />
      <ArticleCards data={BlogsData} />
      {/* <ArticlePopup /> */}
      <Footer />
    </div>
  );
};

export default ArticlePage;
