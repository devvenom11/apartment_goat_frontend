import React from "react";
import {
  BankIcon,
  BookIcon,
  CoffeeIcon,
  FilledBankIcon,
  FilledBookIcon,
  FilledCoffeeIcon,
  FilledGroceryIcon,
  FilledGymIcon,
  FilledRestauranticon,
  FilledShopIcon,
  GroceryIcon,
  GymIcon,
  Restauranticon,
  ShopIcon,
} from "../../../assets/icons";
const filters = [
  {
    label: "Schools",
    value: "schools",
    icon: <BookIcon />,
    filledIcon: <FilledBookIcon />,
  },
  {
    label: "Restaurants",
    value: "restaurants",
    icon: <Restauranticon />,
    filledIcon: <FilledRestauranticon />,
  },
  {
    label: "Groceries",
    value: "groceries",
    icon: <GroceryIcon />,
    filledIcon: <FilledGroceryIcon />,
  },
  {
    label: "Coffee",
    value: "coffee",
    icon: <CoffeeIcon />,
    filledIcon: <FilledCoffeeIcon />,
  },
  {
    label: "Banks",
    value: "banks",
    icon: <BankIcon />,
    filledIcon: <FilledBankIcon />,
  },
  {
    label: "Shops",
    value: "shops",
    icon: <ShopIcon />,
    filledIcon: <FilledShopIcon />,
  },
  {
    label: "Fitness",
    value: "fitness",
    icon: <GymIcon />,
    filledIcon: <FilledGymIcon />,
  },
];
const Neighborhood = () => {
  return (
    <div className="mb-8 md:mb-9 md:border-b md:border-b-border-light md:pb-[42px]">
      <h3 className="px-5 text-2xl font-bold md:px-0">Neighborhood</h3>
      <div className="w-full  md:mt-4 relative rounded-[16px]">
        <div className="flex md:absolute px-2 z-30 py-4 md:py-4 left-0 top-0 overflow-scroll w-full">
          <div className="flex items-center gap-x-1.5 mb-0 w-full max-w-[100%] overflow-x-scroll whitespace-nowrap hide_scroll">
            {filters?.map((item, idx) => (
              <div key={idx} className="bg-white py-2 px-[18px] border-[1px] border-[#DBDBDB] rounded-[99px] flex justify-center items-center cursor-pointer hover:border-brand group">
                <p className="text-xs text-brand font-medium flex gap-1 items-center">
                  <span className="group-hover:hidden block">{item?.icon}</span>
                  <span className="group-hover:block hidden">{item?.filledIcon}</span>
                  {item?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <iframe
          title="Google Map"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.192402353!2d-0.2416811325292974!3d51.528771841567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce9644b3bf%3A0x3c787f5af9f99f98!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1620216463587!5m2!1sen!2suk"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Neighborhood;
