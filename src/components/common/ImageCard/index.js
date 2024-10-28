import Link from "next/link";
import React from "react";

const ImageCard = ({ title, price, image, slug }) => {
  return (
    <div className="w-full px-2">
      <figure className="overflow-hidden relative md:rounded-[24px] w-[270px] md:min-w-[300px] md:w-full">
        <Link href={`/apartments/${slug}`}>
          {" "}
          <img
            className="absolute w-full h-full top-0 left-0 bg-cover"
            src={image?.src}
            alt="card"
          />
          <div className="pt-[280px] md:pt-[227px] pb-[32px] px-[52px] relative z-10 bg-gradient-to-t from-[#2D3D41] to-transparent md:rounded-[24px]">
            <h2 className="text-2xl leading-[36px] font-semibold text-white mb-1 text-center">
              {title}
            </h2>
            <p className="text-xl leading-[30px] text-white text-center">
              ${price}{" "}
              <span className="text-lg leading-[27px] text-[#D4D8D8]">/</span>
              <span className="text-sm leading-[21px] text-[#D4D8D8]">
                average cashback
              </span>
            </p>
          </div>
        </Link>
      </figure>
    </div>
  );
};

export default ImageCard;
