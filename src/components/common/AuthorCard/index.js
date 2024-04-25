import React from 'react'
import { AuthorStartsIcon } from '../../../assets/icons'

const AuthorCard = ({ author = "Ben Bryant", image = '' }) => {
    return (
        <figure className='flex gap-x-3 w-fit items-center'>
            <div className=''>
                <div className='mb-1'>
                    <p className='text-[20px] leading-[30px] font-semibold text-[#FEFEFE]'>
                        {author}
              </p>
                </div>
                <div className=''>
                    <AuthorStartsIcon />
                </div>
            </div>
            <div className=''>
                <img src={image} alt='author' className='w-[64px] h-[64px] rounded-full' />
            </div>
        </figure>
    )
}

export default AuthorCard