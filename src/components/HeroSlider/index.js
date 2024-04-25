import React from 'react'
import HeadingSection from '../HeadingSection'
import { ArrowUpIcon } from '../../assets/icons'
import Button from '../common/Button'
import ImageCard from '../common/ImageCard'
import Lake from "../../assets/landingPage/lake.png"
import SliderSection from '../common/Slider'

const HeroSlider = () => {
    return (
        <section className="px-[72px] mb-[152px]">
            <div className='mb-[72px]'>
                <HeadingSection heading={'Explore Chicago’s neighborhoods'}>
                    <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center"} onClick={undefined}>Explore More</Button>
                </HeadingSection>
            </div>
            <div className=''>
                <SliderSection settings={{ dots: false, slidesToShow: 4 }}>
                    <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
                    <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
                    <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
                    <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
                    <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
                    <ImageCard image={Lake} title={'West Loop'} description={'$450'} />
                </SliderSection>
            </div>
        </section>
    )
}

export default HeroSlider