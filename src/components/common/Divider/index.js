import React from 'react'

const Divider = ({ height="1px", color="#989898" }) => {
    return (
        <div style={{height:height,background:color}} className={`w-full`}></div>
    )
}

export default Divider