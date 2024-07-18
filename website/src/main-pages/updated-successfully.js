"use client"
import React, { useState, useEffect } from 'react';
import BackGroundSvg from "src/assets/Article/ApartmentBackgroundSvg.svg";
import Link from 'next/link';
import ThankYouSvg from 'src/assets/ThankYou/ThankYouActive.svg'
import GoatImg from 'src/assets/SignUp/GoatSvg.svg'
import CrossSvg from 'src/assets/Article/CrossSvg.svg'
import { ArrowUpIcon } from 'src/assets/icons';
import LoggedOutView from 'src/components/LoggedOutView';


const SuccessfullyUpdated = () => {
    return (
        <LoggedOutView>
            <div>
                <div className="flex justify-between mb-[103px] lg:hidden pt-[24px] lg:p-0">
                    <img src={GoatImg.src} alt="loading" />
                    <Link href="/">
                        <img src={CrossSvg.src} alt="loading" />
                    </Link>
                </div>
                <div className='flex flex-col justify-center  items-center'>
                    <img src={ThankYouSvg.src} alt="loading" />
                    <div className='lg:px-[164px] mt-[32px]'>
                        <h2 className='text-[26px] lg:text-[32px] leading-[40px] text-center font-[600]'>Thank You</h2>
                        <p className='text-[14px] font-[400] leading-[24px] text-[#5C5C6C]  text-center mt-[10px]'>
                            Your password has been successfully updated!
                        </p>
                    </div>

                </div>
                <div className='lg:flex justify-center'>
                    <Link href="/login">
                        <button
                            className="cursor-pointer bg-[#FF6525] flex items-center justify-center py-[14.5px] px-auto w-full lg:w-[405px] mt-[32px] text-[16px] font-[600] leading-[19.2px] gap-[10px] text-center border-[1px] rounded-[99px]"

                        >
                            <ArrowUpIcon backgroundColor={"#FFFFFF"} />
                            <p className="text-[16px] font-[600] leading-[19.2px] text-white ">Log In Now</p>
                        </button>
                    </Link>
                </div>

            </div>
        </LoggedOutView>
    )
}
export default SuccessfullyUpdated;