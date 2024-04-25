import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeadingSection from '../../components/HeadingSection'
import Button from '../../components/common/Button'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <div className='mt-[146px]'>
                    <HeadingSection heading={'Explore Chicago’s neighborhoods'}>
                        <Button classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[19px] bg-[#22223B] text-[#FEFEFE] rounded-[99px]"} onClick={undefined}>Search</Button>
                    </HeadingSection>
                </div>
            </Layout>
        </>
    )
}

export default Homepage