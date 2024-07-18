import React, { useState } from "react";

const Faq = ({data}) => {
  const [isMore, setIsMore] = useState(false);
  
  return (
    <div className="mx-5 mb-14 xl:mb-4 md:mx-0">
    <h2 className="m-auto hidden max-w-screen-2xl text-2xl font-bold md:block mb-3">Frequently Asked Questions</h2>
    <h2 className="m-auto max-w-screen-2xl text-2xl font-bold md:hidden mb-3">FAQs</h2>
    <div className="flex flex-col gap-y-6">
      {data?.faqs?.data?.slice(0, 3).map((faq, index) => {
        const { Question, Answer } = faq.attributes;
        return(
          <div key={index} className="w-full pb-6 border-b border-[#EAEBEB]">
            <h3 className="text-[16px] font-medium mb-2 text-black">{Question}</h3>
            <p className=" text-black">{Answer}</p>
          </div>
        )
      })}
      {isMore && data.faqs.data.slice(3).map((faq, index) => {
           const { Question, Answer } = faq.attributes;
           return(
             <div key={index + 3} className="w-full pb-6 border-b border-[#EAEBEB]">
          <h3 className="text-[16px] font-medium mb-2">{Question}</h3>
          <p className="text-gray-500">{Answer}</p>
        </div>
)})}
      <span onClick={() => setIsMore(!isMore)} className="text-base text-brand cursor-pointer ">
        {isMore ? "See Less" : "Read more FAQs"}
      </span>
    </div>
  </div>
  );
};

export default Faq;
