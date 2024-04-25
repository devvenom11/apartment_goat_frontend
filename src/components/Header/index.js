import React from 'react'
import { Logo } from '../../assets/icons'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
            <header className="px-[45px] bg-[#F5EEE8] py-[18.5px] w-full relative flex justify-between items-center">
                <div className=''>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <div className='px-6 py-[14px]'>
                        <Button classNames='text-[#22223B] text-sm font-[400] capitalize leading-[16.80px]' onClick={undefined} icon={undefined}>Find an apartment</Button>
                    </div>
                    <div className='px-6 py-[14px]'>
                        <Button classNames='text-[#22223B] text-sm font-[400] capitalize leading-[16.80px]' onClick={undefined} icon={undefined}>Chicago Neighborhoods</Button>
                    </div>
                </div>
                <div className=''>
                    <Link to={'/'}>
                        <Button icon={undefined} classNames="px-[26px] py-[13.5px] rounded-[99px] border border-neutral-400 text-center text-[#22223B] text-sm font-[600] capitalize leading-[16.80px]" onClick={undefined}>
                            Sign In / Sign Up
                        </Button>
                    </Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header