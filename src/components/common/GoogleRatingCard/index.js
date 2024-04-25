import React from 'react'
import { GoogleIcon, GoogleStarsIcon } from '../../../assets/icons'

const GoogleRatingCard = ({ rating = "4.9" }) => {
    return (
        <figure className='flex gap-x-4 w-fit items-center'>
            <div className=''>
                <p className='text-[64px] leading-[64px] font-semibold text-[#FEFEFE] relative'>
                    {rating}
                    <span className='absolute -bottom-[15px] left-0'>
                        <svg width="98" height="20" viewBox="0 0 98 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 18C6.03996 15.6083 10.18 13.8674 14.3198 12.0317C14.9798 11.7391 16.7162 10.3816 17.407 10.6349C18.088 10.8847 18.242 13.0923 18.2726 14C18.2987 14.7769 18.668 14.5714 19.0419 14.5714C21.0327 14.5714 23.1274 13.6037 25.0432 12.8254C28.355 11.4799 31.6425 9.95496 34.949 8.57143C36.2361 8.03289 37.3139 7.14286 38.6613 7.14286C39.4015 7.14286 39.2082 7.69067 39.2192 8.88889C39.2273 9.7799 39.4172 10.7081 39.9405 11.1111C40.8184 11.7873 42.1423 11.4622 43.0661 11.4286C45.6464 11.3348 48.1467 10.4194 50.6446 9.4127C55.8846 7.30089 60.9729 4.26873 66.2824 2.63492C67.1878 2.35633 68.1342 2 69.0618 2C69.6123 2 68.9163 4.5153 68.8983 4.60317C68.427 6.90391 67.6096 9.33934 67.6096 11.8413C67.6096 14.8036 70.661 13.221 71.7354 13.1111C78.2788 12.4421 84.3586 10.258 90.595 7.04762C92.2906 6.17479 94.1928 4.85714 96 4.85714" stroke="#FE9264" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </span>
                </p>
            </div>
            <div className=''>
                <div className='mb-1'>
                    <GoogleIcon />
                </div>
                <div className='flex'>
                    <p className='text-[18px] leading-[18px] text-[#FEFEFE] mr-[6px]'> Reviews 96</p>  <GoogleStarsIcon />
                </div>
            </div>
        </figure>
    )
}

export default GoogleRatingCard