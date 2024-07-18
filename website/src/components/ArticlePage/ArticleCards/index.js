import { useRouter } from "next/navigation";
import React from "react";

const ArticleCards = (data) => {
  const CardsData = [
    {
      color: "#3987FF",
    },
    {
      color: "#4ABC3F",
    },
    {
      color: "#3987FF",
    },
    {
      color: "#3987FF",
    },
  ];
  const router =useRouter();
  return (
    <div className="w-full bg-[#F2F2F2]">
      <div className="max-w-[1440px] mx-auto lg:px-[182px] pb-[120px] ">
        <div className="px-[16px] lg:px-[0px]">
          <div className="pt-[40px] md:pt-[120px]">
            <p className="text-[24px] font-[600] leading-[36px] text-[#22223B]">
              Related content
            </p>
          </div>
          <div className="w-full overflow-x-auto  lg:overflow-hidden ">
            <div className="flex lg:grid-cols-4 mt-[24px] gap-[16px] ">
              {data?.data?.slice(0, 4)?.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>router.push(`/article/${item?.attributes?.Slug}`)}
                  className=" bg-[#FFFFFF] rounded-[8px] min-w-[257px] cursor-pointer"
                >
                  <img
                    src={item?.attributes?.Image?.data?.attributes?.url}
                    alt={item.attributes?.Title}
                    className="w-full rounded-t-[8px] min-h-[171px]"
                  />
                  <div className="px-[16px] ">
                    <p
                      className="mt-[16px] text-[14px] font-normal leading-[21px] text-[#5C5C6C] w-fit"
                      style={{
                        borderBottom: `2px solid ${CardsData[index % CardsData.length].color}`,
                      }}
                    >
                      {item?.attributes?.blog_category?.data?.attributes?.Title}
                    </p>
                    <p className="mt-[16px] text-[16px] font-[500] leading-[20.8px] mb-[24px]">
                      {item?.attributes?.Title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCards;
