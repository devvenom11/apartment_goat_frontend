import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeroSlider from '../../components/HeroSlider'
import LocatorSection from '../../components/LocatorSection'
import FaqsSection from '../../components/FAQsSection'
import FeatureSection from '../../components/FeatureSection'
import CommunitySection from '../../components/CommunitySection'
import BlogSection from '../../components/BlogSection'
import ApartmentsSection from '../../components/ApartmentsSection'
import BenefitSection from '../../components/BenefitSection'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <HeroSlider />
                <FeatureSection />
                <CommunitySection />
                <BenefitSection/>
                <FaqsSection />
                <BlogSection />
                <ApartmentsSection />
                <LocatorSection />
            </Layout>
        </>
    )
}

export default Homepage