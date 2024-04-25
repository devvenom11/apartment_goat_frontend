import React from 'react'
import { Link } from 'react-router-dom'
import { CircleFacebookIcon, CircleInstagramIcon, CircleTikTokIcon, Logo } from '../../assets/icons'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className='px-[45px] bg-[#FFFFFF] '>
                <div className='flex  justify-between pt-[56px] pb-[92px]  sm:max-md:flex-col sm:max-md:pb-10 sm:max-md:pt-0 border border-yellow-800' >
                    <div className=''>
                        <Link to={'/'}>
                            <Logo   />
                        </Link>
                    </div>
                    <div className='max-w-[425px] w-full md:mx-auto mt-2.5 sm:max-md:mt-10'>
                        <div className='flex mb-11 sm:max-md:mb-4  justify-between w-full sm:max-md:flex-col sm:max-md:gap-4'>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] sm:max-md:font-normal sm:max-md:font-Poppins'>About</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] sm:max-md:font-normal sm:max-md:font-Poppins'>Benefits</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] sm:max-md:font-normal sm:max-md:font-Poppins'>Reviews</p>
                            </Link>
                        </div>
                        <div className='flex justify-between w-full sm:max-md:flex-col sm:max-md:gap-4 '>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] sm:max-md:font-normal sm:max-md:font-Poppins'>FAQ</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] sm:max-md:font-normal sm:max-md:font-Poppins'>How It Works</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] sm:max-md:font-normal sm:max-md:font-Poppins'>Blog</p>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-2.5 sm:max-md:mt-10'>
                        <div className='mb-[25px] sm:max-md:mb-4'>
                            <p className='font-semibold text-[19px] leading-[22px] sm:max-md:font-medium sm:max-md:font-Poppins sm:max-md:text-5 sm:max-md:leading-[26px]'>
                                Our Community
                            </p>
                        </div>
                        <div className='flex gap-6 sm:max-md:gap-[16px]'>
                            <Link to={'/'}>
                                <div><CircleFacebookIcon /></div>
                            </Link>
                            <Link to={'/'}>
                                <div><CircleInstagramIcon /></div>
                            </Link>
                            <Link to={'/'}>
                                <div><CircleTikTokIcon /></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border-t pt-[34px] pb-[29px] sm:max-md:pt-[24px] sm:max-md:pb-6'>
                    <p className='text-sm leading-[28px] text-[#22223B]'>Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer