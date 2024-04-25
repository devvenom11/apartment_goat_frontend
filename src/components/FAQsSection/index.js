import React from "react";
import { ArrowUpIcon } from "../../assets/icons";

const FaqsSection = () => {
  const Faqs = [
    {
      question: "What is an apartment locator?",
      answer:
        "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
    },
    {
        question: "I am out of town, do you offer virtual tours?",
        answer:
          "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
      },
      {
        question: "Is there a fee for using your services?",
        answer:
          "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
      },
      {
        question: "Can you set up an appointment for a specific building I want to see?",
        answer:
          "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
      },
      {
        question: "How quickly can I expect to receive apartment options?",
        answer:
          "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
      },
      {
        question: "Can you find me a good deal?",
        answer:
          "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
      },
      {
        question: "Do you have access to every building in Chicago?",
        answer:
          "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
      },
  ];
  return (
    <section>
      <div className="bg-[#BADAF9] max-w-[1442px] mx-auto">
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-[48px] font-[600] leading-[62.4px] mb-[52px]">
              Curious About Apartment Goats?
            </h1>
            <button className="bg-[#22223B] flex gap-[4px] items-center mb-[83px] py-[18.5px] px-[32px] text-[#FEFEFE] font-[600] rounded-[99px]">
              <span>
                <ArrowUpIcon />
              </span>
              Find Apartments
            </button>
          </div>
          <div>
            <div>
              {Faqs.map((item,index)=>{
                return (
                <div key={index}>
                    <p className="text-black">{item?.question}</p>
                    <p className="text-black">{item?.answer}</p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
