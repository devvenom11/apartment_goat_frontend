import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeroSlider from '../../components/HeroSlider'
import LocatorSection from '../../components/LocatorSection'
import FaqsSection from '../../components/FAQsSection'
import FeatureSection from '../../components/FeatureSection'
import CommunitySection from '../../components/CommunitySection'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <HeroSlider />
                <FeatureSection />
                <CommunitySection />
                <FaqsSection />
                <LocatorSection />
            </Layout>
        </>
    )
}

export default Homepage