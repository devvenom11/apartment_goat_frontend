

"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Main from "src/components/FindApartments/main";
import { getData } from "src/utils/helpers";

export default function FindApartment({slug}) {
  const [filters, setFilters] = useState(null);
  const [properties, setProperties] = useState(null);
  const [allProperties, setAllProperties] = useState(null);
  const [bed, setBed] = useState("");
  const [parkingToggled, setParkingToggled] = useState(false);
  const [petToggled, setPetToggled] = useState(false);
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("10000");
  const [checkedItems, setCheckedItems] = useState([]);
  const [reset, setReset] = useState(0);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ page: 1 });
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchParams = useSearchParams();
  const query = searchParams.get("country");
  const all_filters = [
    { name: "Facilities", slug: "/facilities", filterSlug: "/facilities" },
    { name: "Recreations", slug: "/recreations", filterSlug: "/recreations" },
    {
      name: "Eligibility Requirements",
      slug: "/eligibility-requirements",
      filterSlug: "/eligibility_requirements",
    },
    {
      name: "Safety and Access",
      slug: "/safety-and-accesses",
      filterSlug: "/safety_and_accesses",
    },
    {
      name: "Unit Features",
      slug: "/unit-features",
      filterSlug: "/unit_features",
    },
    { name: "Policies", slug: "/policies", filterSlug: "/policies" },
  ];

  useEffect(() => {
    async function fetchFilters() {
      const results = await Promise.all(
        all_filters.map((filter) => getData(filter.slug))
      );

      const formattedFilters = results.map((result, index) => ({
        title: all_filters[index].name,
        slug: all_filters[index].slug,
        filterSlug: all_filters[index].filterSlug,
        items: result.data.map((item) => ({
          title: item.attributes.Name,
          id: item.id,
        })),
      }));

      setFilters(formattedFilters);
    }
    fetchFilters();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        let filters = [];

        if (bed) {
          filters.push(`filters[Number_Of_Bedrooms][$eq]=${bed}`);
        }

        if (petToggled) {
          filters.push(`filters[Pet][$eq]=${petToggled}`);
        }

        if (parkingToggled) {
          filters.push(`filters[Parking][$eq]=${parkingToggled}`);
        }

        // if (minPrice) {
        //   filters.push(`filters[Min_Price][$gte]=${minPrice}`);
        // }

        // if (maxPrice) {
        //   filters.push(`filters[Max_Price][$lte]=${maxPrice}`);
        // }

        if (slug) {
          filters.push(`filters[neighborhood][$eq]=${slug}`);
        }
        checkedItems.map((category) => {
          category.items.map((item) => {
            filters.push(
              `filters[${category.filterSlug.slice(1)}][id][$eq]=${item.id}`
            );
          });
        });
        if (reset >= 1) {
          filters = [];
        }
        setLoading(true);
        const res = await getData("/properties", true, filters, page, sort,25);
        const res_all = await getData("/properties", true,filters,1,undefined,1000);
        setAllProperties(res_all.data)
        setLoading(false);
        setProperties(res.data);
        setPagination(res.meta.pagination);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [
    bed,
    petToggled,
    parkingToggled,
    minPrice,
    maxPrice,
    checkedItems,
    reset,
    page,
    sort,
    query,
  ]); 
  console.log("allProperties",allProperties);
  return (
      <Main
        loading={loading}
        setSort={setSort}
        sort={sort}
        pagination={pagination}
        page={page}
        setPage={setPage}
        filterData={filters}
        bed={bed}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
        propertiesData={properties}
        allPropertiesData={allProperties}
        setBed={setBed}
        setPetToggled={setPetToggled}
        setParkingToggled={setParkingToggled}
        petToggled={petToggled}
        parkingToggled={parkingToggled}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        setReset={setReset}
        reset={reset}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
  );
}