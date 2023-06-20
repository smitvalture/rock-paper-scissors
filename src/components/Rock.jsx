import React from 'react'
import rockIcon from '../assets/images/icon-rock.svg'

const Rock = () => {
    return (
        <div className='w-[150px] h-[150px] bg-red-400 cursor-pointer p-4 rounded-full border-b-[6px] border-red-600'>
            <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                <img src={rockIcon} alt="rock Icon" />
            </div>
        </div>
    )
}

export default Rock