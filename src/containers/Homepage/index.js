import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeroSlider from '../../components/HeroSlider'
// import WorkwithLocator from '../../components/workWithLocator'
import LocatorSection from '../../components/LocatorSection'
import FaqsSection from '../../components/FAQsSection'
import FeatureSection from '../../components/FeatureSection'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <HeroSlider />
                <FeatureSection />
                <FaqsSection />
                <LocatorSection />
            </Layout>
        </>
    )
}

export default Homepage