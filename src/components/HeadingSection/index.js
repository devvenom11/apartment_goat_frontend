import React from 'react'

const HeadingSection = ({ light = false, children, heading }) => {
    return (
        <section className='flex justify-between items-center'>
            <div className='max-w-[485px]'>
                <h2 className={`text-[32px] md:text-[48px] leading-[36.8px] md:leading-[55px] font-semibold ${light ? "text-white" : "text-[#22223B]"}`}>{heading}</h2>
            </div>
            <div className='md:block hidden'>
                {children}
            </div>
        </section>
    )
}

export default HeadingSection