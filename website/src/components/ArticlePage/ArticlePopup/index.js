import React, { useState } from "react";
import LightHousePopup from "../LightHousePopup";
import RequestCodePopup from "../RequestPopup";
import OutsideClickHandler from "react-outside-click-handler";

const ArticlePopup = ({isButton}) => {
  const [aPopup, setAPopup] = useState(true);
  const [cPopup, setCPopup] = useState(false);
  


  return (
    <>
      {aPopup && (
        <div className="py-12 bg-gray-700 bg-opacity-40  transition duration-150 ease-in-out z-[99] fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center">
          <OutsideClickHandler onOutsideClick={() => setAPopup(false)}>
            <div className=" mx-auto relative sm:max-w-[376px]">
              <div className="bg-white sm:rounded-[24px] overflow-hidden w-screen h-screen sm:w-auto sm:h-auto">{aPopup && <LightHousePopup setPopup={setAPopup} setCPopup={setCPopup} isButton={isButton}  />}</div>
            </div>
          </OutsideClickHandler>
        </div>
      )}

      {cPopup && (
        <div className="py-12 bg-gray-700 bg-opacity-40  transition duration-150 ease-in-out z-[99] fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center">
          <OutsideClickHandler onOutsideClick={() => setCPopup(false)}>
            <div className=" mx-auto relative sm:max-w-[376px]">
              <div className="bg-white sm:rounded-[24px] overflow-hidden w-screen h-screen sm:w-auto sm:h-auto">{cPopup && <RequestCodePopup setPopup={setCPopup} />}</div>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </>
  );
};

export default ArticlePopup;
