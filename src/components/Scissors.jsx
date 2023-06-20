import React from 'react'
import scissorsIcon from '../assets/images/icon-scissors.svg'

const Scissors = () => {
    return (
        <div className='w-[150px] h-[150px] bg-yellow-500 cursor-pointer p-4 rounded-full border-b-[6px] border-yellow-600'>
            <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                <img src={scissorsIcon} alt="scissors Icon" />
            </div>
        </div>
    )
}

export default Scissors