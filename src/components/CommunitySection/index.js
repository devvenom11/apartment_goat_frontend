import React, { useState } from 'react'
import HeadingSection from '../HeadingSection'
import Button from '../common/Button'
import { ArrowUpIcon } from '../../assets/icons'
import Divider from '../common/Divider'
import AuthorCard from '../common/AuthorCard'
import Author from "../../assets/landingPage/author.png"
import GoogleRatingCard from '../common/GoogleRatingCard'

const CommunitySection = () => {
    return (
        <section className='px-4 md:px-[45px] bg-[#22223B] md:pb-[126px] pb-[80px]'>
            <div className='pt-[80px] md:pt-[120px] pb-[32px]'>
                <HeadingSection light heading={'Rated #1 by Our Community'}>
                    <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[15px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center border border-[#FEFEFE]"} onClick={undefined}>More reviews</Button>
                </HeadingSection>
            </div>
            <div className='mb-[32px] md:mb-[51px]'>
                <Divider />
            </div>
            <div className='flex md:flex-row flex-col'>
                <div className='flex-1 flex items-end md:mb-0 mb-[45px]'>
                    <GoogleRatingCard />
                </div>
                <div className="block md:hidden mb-8 md:mb-0">
                <Divider  />
                </div>
                <div className='flex-1'>
                    <p className='text-[20px] leading-[30px]  md:text-2xl md:leading-[36px] font-normal md:font-medium text-[#FEFEFE] mb-8 md:mb-[68px]'>
                        I met with Kimberly on a Tuesday and we toured five buildings. I ended up signing on a unit he showed me the day of. He found me amazing prices, scheduled all the tours for me, looked out for me, and I came to find out at the end that the service
                        is free. I had a great time. He made the experience so easy.”
                    </p>
                    <div className=''>
                        <AuthorCard image={Author} />
                    </div>
                </div>

                <div className='mb-[32px] mt-[32px] md:hidden block'>
                <Divider />
                </div>
                <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[15px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center border border-[#FEFEFE] block  md:hidden justify-center"} onClick={undefined}>More reviews</Button>

            </div>
        </section>
    )
}

export default CommunitySection