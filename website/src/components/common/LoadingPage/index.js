import React from "react";
import Header from "src/components/ApartmentDetails/Header";
import Footer from "src/components/Footer";

const LoadingPage = () => {
  const MainLinks = [
    { name: "Find an apartment" },
    { name: "Chicago Neighborhoods" },
  ];

  return (
    <div>
      <Header MainLinks={MainLinks} />
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="w-full h-[calc(100vh-600px)] animate-pulse rounded-lg flex flex-col my-10 gap-y-10">
          <div className="bg-gray-200 animate-pulse  p-5 mx-5 h-full rounded-lg "></div>
          <div className="bg-gray-200 animate-pulse  p-5 mx-5 h-full mr-[10%] rounded-lg"></div>
          <div className="bg-gray-200 animate-pulse  p-5 mx-5 h-full mr-[25%] rounded-lg"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoadingPage;
