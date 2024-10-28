"use client";
import ApartmentGoats from "src/components/BlogPage/ApartmentGoats";
import LatestApartmentsBlogCards from "src/components/BlogPage/LatestapartmentsGoatcards";
import PopularApartmentsBlogCards from "src/components/BlogPage/PopularApartmentGoatCards";
import Footer from "src/components/Footer";
import Header from "src/components/ApartmentDetails/Header";
import { useEffect, useState } from "react";
import { getBlogs, getFilterBlogs } from "src/utils/helpers";

const BlogPage = () => {
  const MainLinks = [
    { name: "Find an apartment" },
    { name: "Chicago Neighborhoods" },
  ];
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState('latest');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    const getBlogsData = async () => {
      try {
        const filter = input;
        const res = await getBlogs();
        const filterRes = await getFilterBlogs(filter);
        setFilteredBlogs(filterRes);
        
        setBlogs(res);
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    };
    getBlogsData();
  }, [input]);
  const latestBlogs = blogs?.data?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  let finalFiltered = [];
  
  if (filteredBlogs?.data?.length !== 0) {
    finalFiltered = filteredBlogs.data;
  } else if (input === 'latest') {
    finalFiltered = latestBlogs;
  } else {
    finalFiltered = latestBlogs;  
  }
   
  return (
    <div className="bg-[#F2F2F2]">
      <Header MainLinks={MainLinks} />
      <ApartmentGoats input={input} setInput={setInput} />
      <LatestApartmentsBlogCards data={finalFiltered} loading={loading} />
      <PopularApartmentsBlogCards data={finalFiltered} loading={loading} />
      <Footer />
    </div>
  );
};

export default BlogPage;

