import React from 'react'

const LoadingCards = () => {
    return (
      <div className="relative mb-3 h-[286px] desktop-sm:mb-5 w-full md:max-w-[283px] rounded-lg overflow-hidden border leading-none">
        <div className="flex h-[162px] w-full items-center justify-center bg-gray-50 animate-pulse"></div>
        <div className="relative flex w-full flex-col p-4 pt-3 leading-none">
          <span
            className="animate-pulse bg-gray-100 mb-1"
            style={{ width: 248, height: 16 }}
          >
            ‌
          </span>
          <br />
          <span
            className="animate-pulse bg-gray-100 mb-2"
            style={{ width: 122, height: 16 }}
          >
            ‌
          </span>
          <br />
          <span
            className="animate-pulse bg-gray-100 mb-1"
            style={{ width: 75, height: 20 }}
          >
            ‌
          </span>
          <br />
        </div>
      </div>
    );
  };

export default LoadingCards
 