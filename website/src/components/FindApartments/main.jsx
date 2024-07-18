import React, { useState } from "react";
import CardList from "./CardList";
import Footer from "./Footer";
import Map from "./Map";
import ApartmentHeader from "src/components/FindApartments/ApartmentHeader";

export default function Main({
  loading,
  sort,
  setSort,
  pagination,
  page,
  setPage,
  data,
  bed,
  filterData,
  propertiesData,
  allPropertiesData,
  setBed,
  setPetToggled,
  setParkingToggled,
  petToggled,
  parkingToggled,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  checkedItems,
  setCheckedItems,
  setReset,
  reset,
  inputValue,
  setInputValue
}) {
  

  return (
    <>
      <ApartmentHeader
        HeaderData={data}
        setBed={setBed}
        bed={bed}
        setParkingToggled={setParkingToggled}
        setPetToggled={setPetToggled}
        parkingToggled={parkingToggled}
        petToggled={petToggled}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        filterData={filterData}
        propertiesData={propertiesData}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        setReset={setReset}
        reset={reset}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />

      <div className="max-h-[calc(100vh-60px)] flex md:flex-row flex-col justify-between  md:gap-11 gap-0  myFontFamily">
        <div className="md:w-[50%] w-[100%] flex-1 md:block hidden">
          <Map propertiesData={allPropertiesData}  inputValue={inputValue} />
        </div>
        <div className=" mt-8 px-4 md:px-0 overflow-y-auto max-h-[100vh] no-scrollbar">
          <div className="md:max-w-[620px] w-auto pr-4">
            <CardList loading={loading} setSort={setSort} sort={sort} page={page} setPage={setPage} pagination={pagination} propertiesData={propertiesData} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}