import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-[100vh]'>
            {/* <Header /> */}
            {/* <div className='flex-1'>{children}</div> */}
            <Footer />
        </div>
    )
}

export default Layout