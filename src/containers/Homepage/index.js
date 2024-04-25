import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeroSlider from '../../components/HeroSlider'
// import WorkwithLocator from '../../components/workWithLocator'
import LocatorSection from '../../components/LocatorSection'
import FaqsSection from '../../components/FAQsSection'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <HeroSlider />
                <FaqsSection />
                <LocatorSection />
            </Layout>
        </>
    )
}

export default Homepage