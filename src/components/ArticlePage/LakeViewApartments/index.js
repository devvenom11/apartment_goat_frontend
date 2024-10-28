"use client";
import React from "react";
import marked from "marked"; // Import marked package
import Chapters from "../Chapters";
import CreekCottages from "../CreekCottages";
import UMoveFree from "../UMoveFree";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const LakeViewApartments = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

 
  // let html = "";
  // const chapDataFinal = data
  //   ?.filter(child => child.type === "heading" && child.level === 2)
  //   .map(child => {
  //     const id = child.children
  //       ?.map(_item => _item.text.trim().toLowerCase().replace(/\s+/g, "-"))
  //       .join("-")
  //       .replace(/-{2,}/g, '-');
  
  //     const title = child.children
  //       ?.map(_item => `<a href='#${id}'> ${_item.text}</a>`)
  //       .join("");
  
  //     html += `<li>${title}</li>`;
  //     return true;
  //   });
   

  return (
    <div className="Apartment flex justify-evenly mt-[24px] px-[16px] lg:px-0 gap-[24px] main-container mx-auto myFontFamily">
      {/* <Chapters data={html} /> */}
      <Chapters data={data} />
      {/* <div className="cus_article w-full mx-auto myFontFamily">
         <BlocksRenderer
          content={data}
          blocks={{
            heading: ({ children }) => {
              let text = children?.map(child => child.props.text).join('') || '';
              let id = text.toLowerCase().replace(/\s+/g, '-');
              return <h2  id={id}>{children}</h2>;
            },
          }}
          
        /> 
      </div>
        */}

      {/* //static data  */}

      <CreekCottages data={data}/>
      <div className="hidden lg:block">{/* <UMoveFree /> */}</div>
    </div>
  );
};

export default LakeViewApartments;
