import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { HEADER_MENU, locations } from "src/utils/data";

export default function Footer() {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const location = locations.find((item) => item.slug === slug);
  const apartmentStyle =HEADER_MENU?.apartment?.menu?.filter((item)=>item.title =='Apartment Layout');
  return (
    <>
      {location && (
        <header className="py-[15px] border-t border-b border-[#c0bfbf] mt-14 mb-14">
          <h3 className="font-poppins font-normal text-base text-[#989898] md:leading-[24px] leading-[21px]">
            <span className="cursor-pointer hover:text-[#6e6d6d]" onClick={() => router.push(`/`)}>
              Home{" "}
            </span>{" "}
            /{" "}
            <span className="cursor-pointer hover:text-[#6e6d6d]" onClick={() => router.push(`/apartments/${slug}`)}>
              {location.name}
            </span>{" "}
            / Apartments in {location.name}
          </h3>
        </header>
      )}
      <main>
        <h1 className="font-poppins font-medium text-2xl leading-[36px] text-[#000000]">Apartments in Chicago</h1>
      </main>
      <footer className="w-full pt-4 md:pt-8 pb-6 ">
        <div className="w-full flex  md:flex-row flex-col flex-wrap items-start justify-between pb-[42px] lg:pb-[65px]">
          <div className="w-full md:w-1/3 lg:w-fit pr-2 md:pr-0">
            <h4 className="font-poppins text-base text-[#000000] font-medium mb-3">Search by Amenities</h4>
            <ul className="w-full flex flex-col gap-y-2">
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Pet friendly apartments in Chicago</li>
              </Link>
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Furnished apartments in Chicago</li>
              </Link>
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Senior apartments in Chicago</li>
              </Link>
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Student apartments in Chicago</li>
              </Link>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-fit mt-8 md:mt-0">
            <h4 className="font-poppins text-base text-[#000000] font-medium mb-3">Search by Bedrooms</h4>
            <ul className="w-full flex flex-col gap-y-2">
            {apartmentStyle[0]?.items?.map((item)=>(
              <Link href={`/apartments/${item?.slug}`}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">{item?.label}in Chicago</li>
              </Link>
                ))}
            
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-fit pr-2 md:pr-0 mt-8">
            <h4 className="font-poppins text-base text-[#000000] font-medium mb-3">Search by Budget</h4>
            <ul className="w-full flex flex-col gap-y-2">
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Apartments under $1,000 in Chicago</li>
              </Link>
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Apartments under $1,500 in Chicago</li>
              </Link>
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Apartments under $2,000 in Chicago</li>
              </Link>
              <Link href={"#"}>
                <li className="text-sm leading-[21px] text-[#989898] font-normal font-poppins">Apartments under $2,500 in Chicago</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
