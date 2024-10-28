import React from "react";
import Card from "./Card";
import { ArrowRight } from "../../assets/icons";
import LocatorCard from "./CardLocator";
import DropdownApartment from "./DropDownApartment";
export default function CardList({
  properties,
  page,
  setPage,
  pagination,
  sort,
  setSort,
  loading,
}) {
  const values = [
    {
      label: "By Date",
      value: "1",
    },
    {
      label: "By bedrooms",
      value: "2",
    },
    {
      label: "By area",
      value: "3",
    },
  ];
  return (
    <>
      <header className="flex flex-row justify-between  pr-2  items-center mb-3">
        {pagination?.totalResults ? (
          <p className="font-poppins text-sm leading-[16.8px] text-[#22223B] font-normal">
            {pagination?.totalResults} properties in your area
          </p>
        ) : (
          <p></p>
        )}
        <DropdownApartment
          setSort={setSort}
          sort={sort}
          value="Sort"
          values={values}
        />
      </header>
      <div className="flex flex-row flex-wrap gap-4 sm:flex-1">
        {loading &&
          [1, 2, 3, 4, 5].map((item, i) => {
            return <LoadingCard key={i} />;
          })}
        {!loading &&
          properties?.map((item, i) => {
            return i === 1 ? (
              <>
                <Card item={item} />
                <LocatorCard />
              </>
            ) :
             (
              <Card item={item} />
            );
          })}
      </div>
      {
        <footer className="mt-10 flex  justify-center items-center gap-2 cursor-pointer">
          {page > 1 && (
            <div
              className="rotate-180"
              onClick={() => setPage(page > 1 ? page - 1 : 1)}
            >
              <ArrowRight />
            </div>
          )}
          <p className="font-poppins font-normal text-base leading-[24px] text-[#22223B]">
            Viewing page{" "}
            {/* {(pagination.currentPage * 20) / 20} -{" "} */}
            { pagination.currentPage} of {pagination.totalPages}
          </p>
          <div onClick={() => setPage(page + 1)}>
            <ArrowRight />
          </div>
        </footer>
      }
    </>
  );
}

const LoadingCard = () => {
  return (
    <div className="relative mb-3 h-[286px] desktop-sm:mb-5 w-full max-w-[283px] mobile-2col:w-[calc(50%-10px)] desktop-sm:w-[288px] rounded-lg overflow-hidden border leading-none">
      <div className="flex h-[162px] w-full items-center justify-center bg-gray-50 animate-pulse"></div>
      <div className="relative flex w-full flex-col p-4 pt-3 leading-none">
        <span
          className="animate-pulse bg-gray-100 mb-1"
          style={{ width: 248, height: 16 }}
        ></span>
        <br />
        <span
          className="animate-pulse bg-gray-100 mb-2"
          style={{ width: 122, height: 16 }}
        ></span>
        <br />
        <span
          className="animate-pulse bg-gray-100 mb-1"
          style={{ width: 75, height: 20 }}
        ></span>
        <br />
      </div>
    </div>
  );
};
