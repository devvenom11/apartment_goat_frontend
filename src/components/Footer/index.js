import React from 'react'
import { Link } from 'react-router-dom'
import { CircleFacebookIcon, CircleInstagramIcon, CircleTikTokIcon, Logo } from '../../assets/icons'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className='px-[45px] bg-[#FFFFFF] '>
                <div className='flex justify-between pt-[56px] pb-[92px]'>
                    <div className=''>
                        <Link to={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div className='max-w-[425px] w-full mx-auto mt-2.5'>
                        <div className='flex mb-11 justify-between w-full'>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px]'>About</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px]'>Benefits</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px]'>Reviews</p>
                            </Link>
                        </div>
                        <div className='flex justify-between w-full'>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px]'>FAQ</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px]'>How It Works</p>
                            </Link>
                            <Link to={'/'}>
                                <p className='text-[#22223B] text-[16px] leading-[19px]'>Blog</p>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-2.5'>
                        <div className='mb-[25px]'>
                            <p className='font-semibold text-[19px] leading-[22px]'>
                                Our Community
                            </p>
                        </div>
                        <div className='flex gap-6'>
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
                <div className='border-t pt-[34px] pb-[29px]'>
                    <p className='text-sm leading-[28px] text-[#22223B]'>Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer