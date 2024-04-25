import React from 'react'

const Button = ({ children, classNames, onClick, icon }) => {
    return (
        <button className={classNames} onClick={onClick} >{icon && <span className='mr-1'>{icon}</span>}{children}</button>
    )
}

export default Button