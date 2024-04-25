import React from 'react'
import HeadingSection from '../HeadingSection'
import Button from '../common/Button'
import { ArrowUpIcon } from '../../assets/icons'
import BlogCard from '../common/BlogCard'
import Blog from "../../assets/landingPage/blog_img.png"
import data from './data'

const ApartmentsSection = () => {
    return (
        <section className='px-[45px] bg-[#F8F8F8] pb-[120px] pt-[240px]'>
            <div className=' pb-[90px] px-[27px]'>
                <HeadingSection heading={'Best apartments in Chicago'}>
                    <Button icon={<ArrowUpIcon fill='#22223B' />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-transparent text-[#22223B] rounded-[99px] flex items-center border border-[#22223B]"} onClick={undefined}>Find apartments</Button>
                </HeadingSection>
            </div>
            <div className='grid grid-cols-4 gap-[15px]'>
            {data?.map((item)=>{
                    console.log("item here >>>>",item)
                    return(
                        
                        <BlogCard title={item?.title} image={item?.img}/>
                    )
                })}
                {/* <BlogCard title='The Top 10 Lofts in  Chicago' image={Blog} /> */}
            </div>
        </section>
    )
}

export default ApartmentsSection