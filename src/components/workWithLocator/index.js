import React from 'react'
import ImageTower from "../../assets/Frame 1160444588.png"
import {ButtonIcon} from "../../assets/icons"



const WorkwithLocator = () => {
    return (
        <section>
            <div className='max-w-[1350px] h-[389px] mx-auto my-[120px]  bg-[#F5EEE8] rounded-[32px] flex justify-between'>
                <div className='ml-[48px] pt-[42px]'>
                    <p className='text-[35px] font-[600]'>
                        Work with a locator and  earn up to <span className='text-[#FF6525] text-[35px] font-[600]'>$450</span>
                    </p>
                    <ul className='mt-[16px] mb-[37px] leading-[35.52px] text-[16px] '>
                        <li className='flex items-center gap-[5px]'><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.02232 11.4842L10.075 16.5841L19.0027 7.10739" stroke="#22223B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>Get a curated list sent to you</li>
                        <li className='flex items-center gap-[5px]'><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.02232 11.4842L10.075 16.5841L19.0027 7.10739" stroke="#22223B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>Get a curated list sent to you</li>
                        <li className='flex items-center gap-[5px]'><span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.02232 11.4842L10.075 16.5841L19.0027 7.10739" stroke="#22223B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>Get a curated list sent to you</li>
                    </ul>
                    <button className='py-[18.5px] px-[32px] flex gap-[4px] bg-[#FF6525] rounded-[99px] text-[16px] text-[#FEFEFE] font-[600] text-center '><span><ButtonIcon/></span>Get Recommendations</button>
                </div>
                <div className='relative w-full h-full'>
                    <img className='absolute top-[-45px] right-0 w-[565px] h-[434px] pr-[77.87px]' src={ImageTower} alt='' />
                </div>
            </div>
        </section>
    )
}

export default WorkwithLocator