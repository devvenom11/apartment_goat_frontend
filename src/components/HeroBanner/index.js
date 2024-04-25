import React from 'react'
import { BuildingsIcon, HeroShockIcon ,SearchIcon} from '../../assets/icons'
import Button from '../common/Button'

const HeroBanner = () => {
    return (
        <section className='bg-[#F5EEE8] relative mb-[142px]'>
            <div className='max-w-[962px]  mx-auto pt-[51px] pb-[315px] relative z-10 md:px-0 px-4'>
                <div className='pb-[31px] md:pb-[67px] border-b border-[#989898]'>
                    <h1 className='text-[56px] md:text-[80px] leading-[61.6px] md:leading-[88px] font-semibold text-[#22223B] text-center tracking-[0.07em]'>
                        Your Dream Apartment + <span className='relative'>Cashback<span className='absolute -bottom-[15px] -left-[15px] md:mb-0 mb-2'><HeroShockIcon /></span></span> = Bliss
                        Font
                    </h1>
                </div>
                <div className='pt-6 md:pt-10'>
                    <p className='text-center text-[16px] md:text-[23px] font-[400px] leading-[24px] md:leading-[34px] text-[#22223B]'>
                        Lease in Chicago through Apartment Goats and enjoy up to $450 in rebates
                    </p>
                </div>
                <div className='pt-10 md:pt-12'>
                    <div className='max-w-[744px] min-w-full pl-[41px] pr-3  mx-auto h-20 rounded-[174px] border border-[#989898] flex items-center justify-between bg-[#FEFEFE]'>
                        <div className='w-full pr-2'>
                            <input placeholder='Where do you want to live?' className='placeholder-[#DBDBDB] md:placeholder-[#989898]  text-base w-full h-full py-2 focus-visible:outline-none' />
                        </div>
                        <div className='hidden md:block'>
                            <Button icon={undefined} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[19px] bg-[#22223B] text-[#FEFEFE] rounded-[99px]"} onClick={undefined}>
                                    Search              
                                       </Button>
                        </div>
                        <div className='block md:hidden'>
                            <SearchIcon className="sm:hidden inline-block" onClick={undefined}/> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 '>
                <BuildingsIcon />
            </div>
        </section>
    )
}

export default HeroBanner