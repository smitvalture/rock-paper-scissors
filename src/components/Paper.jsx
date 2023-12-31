import React from 'react'
import paperIcon from '../assets/images/icon-paper.svg'

const Paper = () => {
    return (
        <div className='w-[245px] h-[250px] bg-blue-500 cursor-pointer p-6 rounded-full border-b-[6px] border-blue-600'>
            <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                <img width={100} src={paperIcon} alt="paper Icon" />
            </div>
        </div>
    )
}

export default Paper