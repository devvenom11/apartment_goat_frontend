import React from 'react'

const HeadingSection = ({ children, heading }) => {
    return (
        <section className='px-[45px] flex justify-between items-center'>
            <div className='max-w-[485px]'>
                <h2 className='text-[48px] leading-[55px] font-semibold text-[#22223B]'>{heading}</h2>
            </div>
            <div className=''>
                {children}
            </div>
        </section>
    )
}

export default HeadingSection