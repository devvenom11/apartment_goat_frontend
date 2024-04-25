import React from 'react'
import { BuildingsIcon, HeroShockIcon } from '../../assets/icons'
import Button from '../common/Button'

const HeroBanner = () => {
    return (
        <section className='bg-[#F5EEE8] relative mb-[142px]'>
            <div className='max-w-[962px] mx-auto pt-[51px] pb-[315px] relative z-10'>
                <div className='pb-[67px] border-b border-[#989898]'>
                    <h1 className='text-[80px] leading-[88px] font-semibold text-[#22223B] text-center tracking-[0.07em]'>
                        Your Dream Apartment + <span className='relative'>Cashback<span className='absolute -bottom-[15px] -left-[15px]'><HeroShockIcon /></span></span> = Bliss
                    </h1>
                </div>
                <div className='pt-10'>
                    <p className='text-center text-[23px] leading-[34px] text-[#22223B]'>
                        Lease in Chicago through Apartment Goats and enjoy up to $450 in rebates
                    </p>
                </div>
                <div className='pt-12'>
                    <div className='w-[744px] pl-[41px] pr-3  mx-auto h-20 rounded-[174px] border border-[#989898] flex items-center justify-between bg-[#FEFEFE]'>
                        <div className='w-full pr-2'>
                            <input placeholder='Where do you want to live?' className=' placeholder-[#989898] w-full h-full py-2 focus-visible:outline-none' />
                        </div>
                        <div className=''>
                            <Button icon={undefined} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[19px] bg-[#22223B] text-[#FEFEFE] rounded-[99px]"} onClick={undefined}>Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 right-0'>
                <BuildingsIcon />
            </div>
        </section>
    )
}

export default HeroBanner