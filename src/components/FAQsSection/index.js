import React from "react";
import { useState } from "react";
import { ArrowUpIcon, SheveronUp } from "../../assets/icons";
import { SheveronDown } from "../../assets/icons";
import Accordian from "../common/Accordian";

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

//   const handleClick = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };
  const Faqs = [
    {
      question: "What is an apartment locator?",
      answer:
        "An apartment locator, like Apartment Goats, is your dedicated partner in the apartment-hunting journey. We simplify the process by providing personalized guidance, scheduling tours, and sharing our expertise to help you find your ideal apartment.",
    },
    {
      question: "I am out of town, do you offer virtual tours?",
      answer:
        "Yes, we offer virtual tours for clients who are unable to visit properties in person. Our team will guide you through the process remotely, providing video tours and detailed information about each property.",
    },
    {
      question: "Is there a fee for using your services?",
      answer:
        "No, our services are completely free for clients. We earn our commission from the property owners when a lease is signed, so you don't have to worry about any hidden fees or charges.",
    },
    {
      question:
        "Can you set up an appointment for a specific building I want to see?",
      answer:
        "Absolutely! Just let us know which building you're interested in, and we'll schedule an appointment for you to tour the property at your convenience.",
    },
    {
      question: "How quickly can I expect to receive apartment options?",
      answer:
        "We strive to provide apartment options as quickly as possible. Typically, you can expect to receive a list of available properties within 24 to 48 hours after contacting us.",
    },
    {
      question: "Can you find me a good deal?",
      answer:
        "Yes, we work closely with property owners and managers to negotiate the best deals for our clients. Whether you're looking for discounted rent, move-in specials, or other incentives, we'll do our best to find you a great deal.",
    },
    {
      question: "Do you have access to every building in Chicago?",
      answer:
        "While we have access to a wide range of properties throughout Chicago, we may not have access to every single building. However, we'll work tirelessly to find options that meet your criteria and preferences.",
    },
  ];
  return (
    <section className="">
      <div className="bg-[rgb(186,218,249)] max-w-[1442px] mx-auto  ">
        <div className="flex pt-[120px] pb-[110px] justify-between gap-[221.28px] pl-[45px] pr-[74px]">
          <div>
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
          <div className="">
            {Faqs.map((item, idx) => {
              
              return (
               <Accordian key={idx} question={item?.question} answer={item?.answer}/>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
