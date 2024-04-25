import React from 'react'
import { LeasingBuildingIcon } from '../../assets/icons'

const BenefitSection = () => {
    return (
        <section className='px-[45px] bg-[#F5EEE8] pt-[126px] pb-[129px]'>
            <div className='flex justify-between gap-x-[36px] mb-[148px]'>
                <div className='flex-1 flex items-center'>
                    <div>
                        <h2 className='mb-10 text-[48px] leading-[55px] font-semibold text-[#22223B]'>
                            We're Revolutionizing Your Leasing Experience
                        </h2>
                        <p className='text-[18px] leading-[31px] text-[#5C5C6C]'>
                            ApartmentGoats is on a mission to create the world’s most extensive rental platform, revolutionizing how apartments are found and leased. We want to make moving as effortless and rewarding as possible, offering a helping hand and a little extra cash to make life easier.
                        </p>
                    </div>
                </div>
                <div className='w-[361px] relative rounded-[310px] py-[310.5px] bg-[#22223B]'>
                    <div className='absolute bottom-0 left-[30%] transform -translate-x-[30%]'>
                        <LeasingBuildingIcon />
                    </div>
                </div>
                <div className='flex-1'></div>
            </div>
            <div className='flex justify-between gap-x-[36px] mb-[148px]'>
                <div className='flex-1'></div>
                <div className='w-[361px] relative rounded-[310px] py-[310.5px] bg-[#22223B]'>
                    <div className='absolute bottom-0 left-[30%] transform -translate-x-[30%]'>
                        <LeasingBuildingIcon />
                    </div>
                </div>
                <div className='flex-1 flex items-center'>
                    <div>
                        <h2 className='mb-10 text-[48px] leading-[55px] font-semibold text-[#22223B]'>
                            Leasing Made Simple for You
                        </h2>
                        <p className='text-[18px] leading-[31px] text-[#5C5C6C]'>
                            We offer the best apartment search experience by providing exclusive building specials, post-signing cash back, and free expert guidance – making finding an apartment easier than ever before.                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-x-[36px]'>
                <div className='flex-1 flex items-center'>
                    <div>
                        <h2 className='mb-10 text-[48px] leading-[55px] font-semibold text-[#22223B]'>
                            Find Your Perfect Home
                        </h2>
                        <p className='text-[18px] leading-[31px] text-[#5C5C6C]'>
                            Find your perfect home easily with our customization feature. Choose from pet-friendly options, gyms, balconies with views, or pools to match your lifestyle, all in one simple search.                        </p>
                    </div>
                </div>
                <div className='w-[361px] relative rounded-[310px] py-[310.5px] bg-[#22223B]'>
                    <div className='absolute bottom-0 left-[30%] transform -translate-x-[30%]'>
                        <LeasingBuildingIcon />
                    </div>
                </div>
                <div className='flex-1'></div>
            </div>
        </section>
    )
}

export default BenefitSection