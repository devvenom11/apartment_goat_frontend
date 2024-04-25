import React from 'react'
import HeadingSection from '../HeadingSection'
import Button from '../common/Button'
import { ArrowUpIcon } from '../../assets/icons'

const BlogSection = () => {
    return (
        <section className='px-[45px] bg-[#F8F8F8]'>
            <div className='pt-[120px] pb-[64px]'>
                <HeadingSection heading={'Explore Chicago’s neighborhoods'}>
                    <Button icon={<ArrowUpIcon fill='#22223B' />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-transparent text-[#FEFEFE] rounded-[99px] flex items-center border border-[#22223B]"} onClick={undefined}>Explore More</Button>
                </HeadingSection>
            </div>
        </section>
    )
}

export default BlogSection