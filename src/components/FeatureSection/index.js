import React from 'react'
import HeadingSection from '../HeadingSection'
import Divider from '../common/Divider'
import { WriteIcon } from '../../assets/icons'

const FeatureSection = () => {
    return (
        <section className='px-[45px]'>
            <div className='mb-[54px]'>
                <HeadingSection heading={'Explore Chicago’s neighborhoods'}>
                    <p className='text-[48px] leading-[55px] font-semibold text-[#22223B]'>3 easy steps</p>
                </HeadingSection>
            </div>
            <div>
                <div className='mb-[33px]'>
                    <Divider />
                </div>
                <div className='flex'>
                    <div className='flex gap-x-[90px] mr-[288px]'>
                        <p className='text-2xl leading-[36px] font-semibold text-[#22223B]'>
                            01
                        </p>
                        <div className='w-[113px] h-[113px] rounded-full bg-[#FEE9D4] flex justify-center items-center'>
                            <WriteIcon />
                        </div>
                    </div>
                    <div className='flex gap-x-[93px]'>
                        <div className='min-w-[236px]'>
                            <p className='text-2xl leading-[36px] font-semibold text-[#22223B]'>
                                Secure Your Space
                            </p>
                        </div>
                        <div className=''>
                            <p className='mb-6 text-sm leading-[21px] text-[#5C5C6C]'>
                                Reach out to apartments, set up tours, and apply. Make sure you add your locator as your referral source.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection