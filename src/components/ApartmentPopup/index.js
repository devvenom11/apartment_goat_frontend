import React, { useEffect, useState } from "react";
import WelcomeStep from "./WelcomeStep";
import RebateStep from "./RebateStep";
import LocatorStep from "./LocatorStep";
import GetStarted from "./GetStarted";

const ApartmentPopup = ({ setOpen }) => {
  const [step, setStep] = useState("welcome");
  useEffect(() => {
    if (!step) setOpen(false);
  }, [step, setOpen]);
  return (
    <div className={`${step === "started" ? "lg:w-[727px] w-[calc(100vw-16px)]" : "lg:w-[856px] w-[calc(100vw-16px)]"} `}>
      <div className="bg-white rounded-[24px] overflow-hidden">
        {step === "welcome" && <WelcomeStep setStep={setStep} />}
        {step === "rebate" && <RebateStep setStep={setStep} />}
        {step === "locator" && <LocatorStep setStep={setStep} />}
        {step === "started" && <GetStarted setStep={setStep} />}
      </div>
    </div>
  );
};

export default ApartmentPopup;
