"use client";
import React, { useState, useEffect } from "react";
import LuxuryApartments from "../components/ArticlePage/LuxuryApartments";
import LakeViewApartments from "../components/ArticlePage/LakeViewApartments";
import Header from "../components/ApartmentDetails/Header";
import UseMoveFree from "../components/ArticlePage/UseMoveFree";
import ArticleCards from "../components/ArticlePage/ArticleCards";
import Footer from "../components/Footer";
import ArticlePopup from "../components/ArticlePage/ArticlePopup";
import { getBlogs } from "src/utils/helpers";
import LoadingPage from "../components/common/LoadingPage";
const ArticlePage = ({ slug }) => {
  const [blog, setBlog] = useState();
  const [allBlogs, setAllBlogs] = useState();
  const [loading, setLoading] = useState(true);

  const MainLinks = [
    { name: "Find an apartment" },
    { name: "Chicago Neighborhoods" },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs(slug);
        const blogs = await getBlogs();
        setBlog(data);
        setAllBlogs(blogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);
  const data = blog?.data[0]?.attributes;
  
  if (loading) {
    return (
      <div>
        {" "}
        <LoadingPage />
      </div>
    );
  }
  const relatedContent = allBlogs?.data?.filter(
    (item) => item?.attributes?.Slug !== slug
  );
  return (
    <div>
      <Header MainLinks={MainLinks} />
      <LuxuryApartments data={data} />
      <LakeViewApartments data={data?.Body} />
      <UseMoveFree />
      <ArticleCards data={relatedContent} />
      {/* <ArticlePopup /> */}
      <Footer />
    </div>
  );
};

export default ArticlePage;
