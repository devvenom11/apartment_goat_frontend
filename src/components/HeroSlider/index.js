import React from 'react'
import HeadingSection from '../HeadingSection'
import { ArrowUpIcon } from '../../assets/icons'
import Button from '../common/Button'
import ImageCard from '../common/ImageCard'
import Lake from "../../assets/landingPage/lake.png"
import SliderSection from '../common/Slider'

const HeroSlider = () => {
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block"}}
                onClick={onClick}
            >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_35391)">
                        <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 42 3)" fill="white" shape-rendering="crispEdges" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8978 17.4598C23.7478 17.3098 23.6778 17.1198 23.6778 16.9298C23.6778 16.7398 23.7478 16.5398 23.8978 16.3998C24.1878 16.1098 24.6678 16.1098 24.9578 16.3998L31.0278 22.4698C31.3178 22.7598 31.3178 23.2398 31.0278 23.5298L24.9578 29.5998C24.6678 29.8898 24.1878 29.8898 23.8978 29.5998C23.6078 29.3098 23.6078 28.8298 23.8978 28.5398L28.688 23.7496L13.4975 23.7496C13.0875 23.7496 12.7475 23.4096 12.7475 22.9996C12.7475 22.5896 13.0875 22.2496 13.4975 22.2496H28.6876L23.8978 17.4598Z" fill="#22223B" />
                    </g>
                    <defs>
                        <filter id="filter0_d_0_35391" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_35391" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_35391" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", zIndex: "10" }}
                onClick={onClick}
            >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_35384)">
                        <rect x="7" y="3" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1022 17.4598C25.2522 17.3098 25.3222 17.1198 25.3222 16.9298C25.3222 16.7398 25.2522 16.5398 25.1022 16.3998C24.8122 16.1098 24.3322 16.1098 24.0422 16.3998L17.9722 22.4698C17.6822 22.7598 17.6822 23.2398 17.9722 23.5298L24.0422 29.5998C24.3322 29.8898 24.8122 29.8898 25.1022 29.5998C25.3922 29.3098 25.3922 28.8298 25.1022 28.5398L20.312 23.7496L35.5025 23.7496C35.9125 23.7496 36.2525 23.4096 36.2525 22.9996C36.2525 22.5896 35.9125 22.2496 35.5025 22.2496H20.3124L25.1022 17.4598Z" fill="#22223B" />
                    </g>
                    <defs>
                        <filter id="filter0_d_0_35384" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-3" dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_35384" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_35384" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </div>
        );
    }
    return (
        <section className="px-[72px] mb-[152px]">
            <div className='mb-[72px]'>
                <HeadingSection heading={'Explore Chicago’s neighborhoods'}>
                    <Button icon={<ArrowUpIcon />} classNames={"text-[16px] leading-[19px] font-semibold px-[37px] py-[16px] bg-[#22223B] text-[#FEFEFE] rounded-[99px] flex items-center"} onClick={undefined}>Explore More</Button>
                </HeadingSection>
            </div>
            <div className=''>
                <SliderSection classNames='hero_slider' settings={{
                    dots: false,
                    slidesToShow: 4,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />
                }}>
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