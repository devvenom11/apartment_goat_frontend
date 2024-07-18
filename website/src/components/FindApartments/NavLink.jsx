import React, { useState } from "react";
import Link from "next/link";

export default function NavLink() {
  const [selected, setSelected] = useState("All");

  const handleSelect = (item) => {
    setSelected(item);
  };

  const navItems = ["All", "My Properties", "Recommendations"];

  return (
    <ul className="flex flex-row gap-8 font-poppins font-normal text-base leading-[19.2px] text-[#989898] border-b-[1px] border-[#989898] mb-2">
      {navItems.map((item) => (
        <li key={item} onClick={() => handleSelect(item)} className={`cursor-pointer ${selected === item ? "text-[#FF6525] border-b-2 border-[#FF6525] pb-[13px]" : ""}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
