import React from "react";
import HeadingSection from "../HeadingSection";
import Button from "../common/Button";
import { BlackArrowUpIcon } from "../../assets/icons";
import BlogCard from "../common/BlogCard";
import staticData from "./data";
import { useRouter } from "next/navigation";

const BlogSection = ({ data }) => {
  const router = useRouter();
  return (
    <section className="bg-[#F8F8F8]">
      <div className="px-4 md:px-[45px] mx-auto">
        <div className="pt-[60px] md:pt-[120px] pb-8 md:pb-[64px] md:px-[27px]">
          <HeadingSection heading={"Blog"}>
            <Button
              icon={<BlackArrowUpIcon fill="#22223B" />}
              classNames={
                "text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-transparent text-[#22223B] rounded-[99px] flex items-center border border-[#22223B]"
              }
              onClick={()=>router.push(`/blog`)}
            >
              More Articles
            </Button>
          </HeadingSection>
        </div>
        <div className="w-full overflow-x-auto sc lg:overflow-hidden ">
          <div className="flex lg:grid  lg:grid-cols-4 gap-[1vw]">
            {data?.map((item) => {
              return (
                <div className="flex justify-center">
                  <BlogCard
                    title={item?.title}
                    image={item?.image}
                    slug={item?.slug}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
