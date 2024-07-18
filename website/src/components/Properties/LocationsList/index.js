"use client"
import React from 'react';

const LocationList = ({ items, className }) => {
    return (
        <div className={`absolute bg-white shadow-lg  mt-2  top-[41px] ${className}`}>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-200 cursor-pointer">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default LocationList;

