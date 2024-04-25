import React from 'react'
import HeadingSection from '../HeadingSection'
import Divider from '../common/Divider'
import { ArrowUpIcon, WriteIcon } from '../../assets/icons'
import Button from '../common/Button'

const FeatureSection = () => {
    return (
        <section className='px-[45px] mb-[139px]'>
            <div className='mb-[54px]'>
                <HeadingSection heading={'Earn Cash Back On Your Next Lease'}>
                    <p className='text-[48px] leading-[55px] font-semibold text-[#22223B]'>3 easy steps</p>
                </HeadingSection>
            </div>
            <div>
                <div className='mb-[33px]'>
                    <Divider />
                </div>
                <div className='flex justify-between'>
                    <div className='mr-[90px]'>
                        <p className='text-2xl leading-[36px] font-semibold text-[#22223B]'>
                            01
                        </p>
                    </div>
                    <div className='mr-[288px] w-[113px] h-[113px] rounded-full bg-[#FEE9D4] flex justify-center items-center'>
                        <WriteIcon />
                    </div>
                    <div className='min-w-[236px] mr-[93px]'>
                        <p className='text-2xl leading-[36px] font-semibold text-[#22223B]'>
                            Secure Your Space
                        </p>
                    </div>
                    <div className='max-w-[460px]'>
                        <p className='mb-6 text-sm leading-[21px] text-[#5C5C6C]'>
                            Reach out to apartments, set up tours, and apply. Make sure you add your locator as your referral source.
                        </p>
                        <div>
                            <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[36px] py-[10px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center"} onClick={undefined}>Find apartments</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection