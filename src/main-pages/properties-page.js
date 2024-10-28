"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "src/components/ApartmentDetails/Header";
import MyProperties from "src/components/Properties/MyProperties";
import { getPages } from "src/utils/helpers";

const PropertiesPage = () => {
  const [properties, setProperties] = useState();
  const userData = useSelector((state) => state.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query =
          "properties?filters[liked_by][$ne]=null&[fields][0]=name&[fields][1]=slug&[fields][2]=beds&[fields][3]=baths&[fields][4]=price&[fields][5]=liked_by&[populate][0]=photos";
        const res = await getPages(query);
        setProperties(res);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);
  const filteredProperties = properties?.data?.filter((item) =>
    item?.attributes?.liked_by?.includes(userData.id)
  );

  return (
    <div> 
      <Header />
      <MyProperties data={filteredProperties} />
    </div>
  );
};

export default PropertiesPage;
