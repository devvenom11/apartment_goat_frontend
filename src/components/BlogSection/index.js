import React from 'react'
import HeadingSection from '../HeadingSection'
import Button from '../common/Button'
import { ArrowUpIcon } from '../../assets/icons'
import BlogCard from '../common/BlogCard'
import  BlogCardImage from "../../assets/landingPage/blog_img(1).png"
import Blog from "../../assets/landingPage/blog_img.png"
import data from "./data"


const BlogSection = () => {
    return (
        <section className='px-[45px] bg-[#F8F8F8]'>
            <div className='pt-[120px] pb-[64px] px-[27px]'>
                <HeadingSection heading={'Blog'}>
                    <Button icon={<ArrowUpIcon fill='#22223B' />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-transparent text-[#22223B] rounded-[99px] flex items-center border border-[#22223B]"} onClick={undefined}>More Articles</Button>
                </HeadingSection>
            </div>
            <div className='grid grid-cols-4 gap-[15px]'>
                {data?.map((item)=>{
                    console.log("item here >>>>",item)
                    return(
                        
                        <BlogCard title={item?.title} image={item?.img}/>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogSection