import React from "react";
import Accordion from "./Accordian";






const PropertyDetails = ({data}) => {
  return (
    <>
      <div className="min-h-[192px] gap-4 rounded border border-[#EAEBEB] px-6 pb-5 pt-[19px] shadow-[0px_2px_8px_rgba(21,26,29,0.08)] md:w-[335px] mx-5 mb-8 mt-6 md:hidden">
        <div className="mb-1 flex h-6 justify-center text-xl font-medium leading-6">Ready to apply?</div>
        <div className="mb-2 text-center leading-6 text-gray-lh-700">
          Don't forget to select “Apartment locator” as who referred you on your application to be eligible to receive a Free Move or $200 Rebate.
        </div>
        <button className="flex h-11 w-full items-center justify-center rounded-full border border-brand-light-even-darker px-6 py-3 font-medium text-brand hover:bg-[#FAFDFB] active:bg-green-150 md:h-9 md:border-brand">
          <span className="whitespace-nowrap text-sm leading-5">Apply</span>
        </button>
      </div>

      {/* <section className="mx-5 mb-8 border-b border-b-border-light pb-9 md:mx-0 md:mb-14 md:border-none md:pb-0">
        <h3 className="mb-4 text-2xl font-bold leading-8">Property Details</h3>
        <div className="w-full flex flex-col gap-y-2 md:gap-y-0 ">
          <Accordion title="Lease Details & Fees" data={data} />
          <Accordion title="Renter Requirements" data={data} />
          <Accordion title="Pet Policy & Fees" data={data} />
        </div>
        <div className="flex gap-2 md:hidden mt-4">
          <button
            type="button"
            className="w-full rounded-full border border-brand py-2.5 font-medium text-brand hover:border-[#48A17C] hover:bg-[rgba(235,245,240,0.5)] active:border-[#48A17C] active:bg-[rgba(235,245,240,0.5)] md:rounded-[200px]"
          >
            Availability
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-brand py-2.5 font-medium text-brand hover:border-[#48A17C] hover:bg-[rgba(235,245,240,0.5)] active:border-[#48A17C] active:bg-[rgba(235,245,240,0.5)] md:rounded-[200px]"
          >
            Apply
          </button>
        </div>
      </section> */}
    </>
  );
};

export default PropertyDetails;
