import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
const Popup = ({ setShow, children }) => {
  return (
    <div className="py-12 bg-gray-700 bg-opacity-40  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center">
        <div className=" mx-auto relative">
          <div onClick={() => setShow(false)} className="sm:hidden block absolute top-3 right-3 z-50 cursor-pointer">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 5.25L5.25 15.75" stroke="#22223B" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.25 5.25L15.75 15.75" stroke="#22223B" strokeWidth="1.3125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {children}
        </div>
    </div>
  );
};
export default Popup;
