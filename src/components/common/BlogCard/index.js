import Link from "next/link";
import React from "react";
import { API_URL } from "src/utils/constants";

const BlogCard = ({ title = "", image, slug }) => {
  return (
    <figure className="rounded-tl-[16px] rounded-tr-[16px] w-full flex flex-col h-full myFontFamily">
      <Link href={`/article/${slug}`}>
        <div className="p-[163px] relative overflow-hidden rounded-t-3xl">
          <img
            className="absolute w-full h-full top-0 left-0 bg-cover"
            src={image?.src || `${image?.data?.attributes?.url}` || ``}
            alt="card"
          />
        </div>
        <div className="px-4 pt-6 pb-12 bg-[#FFFFFF] rounded-bl-[16px] rounded-br-[16px]">
          <div className="max-w-[355px]">
            <h2 className="text-[22px] leading-[28px] font-semibold text-[#070707] min-h-[56px]">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </figure>
  );
};

export default BlogCard;
