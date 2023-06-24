import React from 'react'
import scissorsIcon from '../assets/images/icon-scissors.svg'

const Scissors = () => {
    return (
        <div className='w-[245px] h-[250px] bg-yellow-500 cursor-pointer p-6 rounded-full border-b-[6px] border-yellow-600'>
            <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                <img width={100} src={scissorsIcon} alt="scissors Icon" />
            </div>
        </div>
    )
}

export default Scissors