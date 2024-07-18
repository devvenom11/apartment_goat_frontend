import React, { useState, useEffect } from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Dropdown from "../../common/DropDown";
import ApartmentCard from "../MainDetails/ApartmentCard";
import ReactDatePicker from "../../common/ReactDatePicker";
import emailjs from "emailjs-com";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

emailjs.init("C6CpR1SbznOvGbOqU");
const ApartmentForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies] = useCookies(["token"]);
  useEffect(() => {
    const token = cookies.token;
    setIsLoggedIn(token !== undefined && !!token);
  }, [cookies.token]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    moveIn: "",
    bedrooms: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleBedroomsChange = (e) => {
    const selectedBedrooms = e;
    setFormData({
      ...formData,
      bedrooms: selectedBedrooms,
    });
  };
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      moveIn: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_sjseiti", "template_p16w7b1", "#contact").then(
      function () {
        setLoading(false);
        toast.success("Form submitted successfully.");
      },
      function (error) {
        setLoading(false);
        toast.error("something went wrong!");
      }
    );
  };
  return (
    <div className="w-full">
      <ToastContainer />
      <div className="block lg:hidden mt-4">
        <ApartmentCard />
      </div>
      <div className={`w-full`}>
        <h2 className="text-[18px] font-bold text-brand">
          Get up to $200 reward
        </h2>
        <h3 className="text-[14px] font-normal text-gray-700">
          Submit the request to show your interest in this property.
        </h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 flex-1" id="contact">
        {!isLoggedIn && (
          <div>
            <div className="w-full grid lg:grid-cols-2 gap-y-4 gap-x-2 mb-4">
              <Input
                required
                label="First Name"
                name="firstName"
                id="firstName"
                onChange={handleChange}
              />
              <Input
                required
                label="Last Name"
                name="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <Input
              required
              label="Email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
        )}
        <div className="w-full flex flex-col gap-y-4 my-4">
          <Dropdown
            required
            label="Bedrooms"
            name="bedrooms"
            id="bedrooms"
            onChange={handleBedroomsChange}
          />
          {/* <Input  type='date' required label='Move-in' /> */}
          <ReactDatePicker
            required
            label="Move in"
            name="moveIn"
            id="moveIn"
            onChange={handleDateChange}
          />
        </div>
        <textarea
          className="w-full h-[114px] resize-none py-3 px-4 rounded-lg outline-none focus:outline-none border-[1px] border-[#22223B29] border-opacity-15 "
          placeholder="I’m interested in this property and would like more information."
          name="message"
          id="message"
          onChange={handleChange}
        />
        <div className="bottom-4 left-4 right-4">
          <div className="mt-6 mb-2">
            <Button
              disabled={loading}
              icon={null}
              onClick={() => {}}
              classNames=" w-full bg-brand hover:scale-105 transition-transform duration-250    py-[8px]  px-[32px] text-[#FEFEFE] font-[600] rounded-[99px]"
            >
              {loading ? "Loading..." : "I’m Interested"}
            </Button>
          </div>
          <div className="flex flex-col justify-center text-center text-12px leading-4 text-gray-500 mobile-md:text-14px mobile-md:leading-5 mt-3">
            <p>By submitting this request, I agree to Lighthouse’s</p>
            <p className="flex flex-row justify-center text-center">
              <a
                target="_blank"
                href="/terms"
                className="flex cursor-pointer justify-center underline"
              >
                Terms of Service
              </a>
              <span>&nbsp;and&nbsp;</span>
              <a
                target="_blank"
                href="/privacy"
                className="flex cursor-pointer justify-center underline"
              >
                Privacy Policy
              </a>
              <span>.</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApartmentForm;
