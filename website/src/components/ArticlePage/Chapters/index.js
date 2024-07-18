import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Chapters = ({ data }) => {
  return (
    <div className="ul-list-items cus_article_heading ">
      <div>
        <h1 className="ch-heading">Chapters</h1>
      </div>
      <ul className="max-w-[196px]">
        {/* <BlocksRenderer content={data} /> */}
        <div className="cus_chap flex flex-col" dangerouslySetInnerHTML={{__html:data}}/>
      </ul>
    </div>
  );
};

export default Chapters;
