import React from 'react'
import HeadingSection from '../HeadingSection'
import Button from '../common/Button'
import { ArrowUpIcon } from '../../assets/icons'
import Divider from '../common/Divider'
import AuthorCard from '../common/AuthorCard'
import Author from "../../assets/landingPage/author.png"
import GoogleRatingCard from '../common/GoogleRatingCard'

const CommunitySection = () => {
    return (
        <section className='px-[45px] bg-[#22223B] pb-[126px]'>
            <div className='pt-[120px] pb-[49px]'>
                <HeadingSection light heading={'Rated #1 by Our Community'}>
                    <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[15px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center border border-[#FEFEFE]"} onClick={undefined}>More reviews</Button>
                </HeadingSection>
            </div>
            <div className='mb-[51px]'>
                <Divider />
            </div>
            <div className='flex'>
                <div className='flex-1 flex items-end'>
                    <GoogleRatingCard />
                </div>
                <div className='flex-1'>
                    <p className='text-2xl leading-[36px] font-medium text-[#FEFEFE] mb-[68px]'>
                        I met with Kimberly on a Tuesday and we toured five buildings. I ended up signing on a unit he showed me the day of. He found me amazing prices, scheduled all the tours for me, looked out for me, and I came to find out at the end that the service
                        is free. I had a great time. He made the experience so easy.”
                    </p>
                    <div className=''>
                        <AuthorCard image={Author} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommunitySection