import React from 'react'

const BlogCard = ({ title = "", image = "" }) => {
    return (
        <figure className='rounded-tl-[16px] rounded-tr-[16px] w-fit'>
            <div className='p-[163px] relative'>
                <img className='absolute w-full h-full top-0 left-0 bg-cover' src={image} alt='card' />
            </div>
            <div className='m=px-4 pt-6 pb-12 bg-[#FFFFFF] rounded-bl-[16px] rounded-br-[16px]'>
                <div className='max-w-[294px]'>
                    <h2 className='text-[22px] leading-[28px] font-semibold text-[#070707]'>
                        {title}
                    </h2>
                </div>
            </div>
        </figure>
    )
}

export default BlogCard