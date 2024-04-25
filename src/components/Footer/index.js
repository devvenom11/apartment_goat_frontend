import React from 'react'
import { Link } from 'react-router-dom'
import { CircleFacebookIcon, CircleInstagramIcon, CircleTikTokIcon, Logo } from '../../assets/icons'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className='px-[45px] bg-[#FFFFFF] '>
                <div className='flex  justify-between  md:flex-row md:pt-[56px] md:pb-[92px]  flex-col pb-10 pt-0' >
                    <div className=''>
                        <Link to={'/'}>
                            {/* Logo width should be set in repsonivness */}
                            <Logo   />
                        </Link>
                    </div>
                    <div className='max-w-[425px] w-full md:mx-auto md:mt-2.5 mt-10 mx-[0px]'>
                        <div className='flex md:mb-11 md:flex-row  md:gap-0 mb-4   justify-between w-full flex-col gap-4'>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] '>About</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] '>Benefits</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] '>Reviews</p>
                            </Link>
                        </div>
                        <div className='flex justify-between  md:flex-row md:gap-0 w-full flex-col gap-4 '>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] '>FAQ</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] '>How It Works</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px] '>Blog</p>
                            </Link>
                        </div>
                    </div>
                    <div className='md:mt-2.5 mt-10'>
                        <div className='mb-[25px] mb-4'>
                            <p className='md:font-semibold md:text-[19px] md:leading-[22px] font-medium  text-5 leading-[26px]'>
                                Our Community
                            </p>
                        </div>
                        <div className='flex md:gap-6 gap-[16px]'>
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
                <div className='border-t md:pt-[34px] md:pb-[29px] pt-[24px] pb-6'>
                    <p className='text-sm md:leading-[28px] text-[#22223B] font-normal leading-[21px]' >Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer