import React from 'react'
import HeadingSection from '../HeadingSection'
import { ArrowUpIcon } from '../../assets/icons'
import Button from '../common/Button'
import ImageCard from '../common/ImageCard'
import Lake from "../../assets/landingPage/lake.png"

const HeroSlider = () => {
    return (
        <section className="px-[72px] mb-[152px]">
            <div className='mb-[72px]'>
                <HeadingSection heading={'Explore Chicago’s neighborhoods'}>
                    <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[19px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center"} onClick={undefined}>Find apartments</Button>
                </HeadingSection>
            </div>
            <div className=''>
                <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
            </div>
        </section>
    )
}

export default HeroSlider