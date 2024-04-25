import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Layout from '../Layout'
import HeroSlider from '../../components/HeroSlider'
import WorkwithLocator from '../../components/workWithLocator'

const Homepage = () => {
    return (
        <>
            <Layout>
                <HeroBanner />
                <HeroSlider />
                <WorkwithLocator />
            </Layout>
        </>
    )
}

export default Homepage