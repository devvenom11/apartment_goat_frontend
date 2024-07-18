"use client"
import React, { useState, useEffect } from 'react';
import BackGroundSvg from "src/assets/Article/ApartmentBackgroundSvg.svg";
import GoatImg from 'src/assets/SignUp/GoatSvg.svg'
import CrossSvg from 'src/assets/Article/CrossSvg.svg'
import Link from 'next/link';
import ThankYouSvg from 'src/assets/ThankYou/ThankYouSvg.svg'
import { ArrowUpIcon } from 'src/assets/icons';
import LoggedOutView from 'src/components/LoggedOutView';


const ThanksMessage = () => {
    const [email, setEmail] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [emailError, setEmailError] = useState('');


    useEffect(() => {
        if (email && !emailError) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [email, emailError]);

    const validateEmail = (value) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(value)) {
            setEmailError('Error occurred, please try again');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        if (emailError) {
            validateEmail(value);
        }
    };

    return (
        <LoggedOutView>
            <div>
                <div className="flex justify-between mb-[103px] lg:hidden pt-[24px] lg:p-0">
                    <img src={GoatImg.src} alt="loading" />
                    <Link href="/">
                        <img src={CrossSvg.src} alt="loading" />
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={ThankYouSvg.src} alt="loading" />
                    <div className='lg:px-[164px] mt-[32px]'>
                        <h2 className='text-[26px] lg:text-[32px] leading-[40px] text-center font-[600]'>Thank You</h2>
                        <p className='text-[14px] font-[400] leading-[24px] text-[#5C5C6C]  text-center mt-[10px]'>
                            We sent an email to bn<Link href="/reset-password" className='text-black cursor-pointer'>_designer@gmail.com </Link>
                            Click confirmation link in the email to verify your account
                        </p>
                    </div>
                </div>
            </div>
        </LoggedOutView>
    )
}
export default ThanksMessage;