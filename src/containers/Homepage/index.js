import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeroSlider from '../../components/HeroSlider'
import WorkwithLocator from '../../components/WorkWithLocator'
import FeatureSection from '../../components/FeatureSection'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <HeroSlider />
                <FeatureSection />
                <WorkwithLocator />
            </Layout>
        </>
    )
}

export default Homepage