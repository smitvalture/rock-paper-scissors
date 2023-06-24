import React from 'react'
import scissorsIcon from '../assets/images/icon-scissors.svg'
import paperIcon from '../assets/images/icon-paper.svg'
import rockIcon from '../assets/images/icon-rock.svg'

const UserChoice = ({paperClick, scissorsClick, rockClick }) => {
    return (
        <div className='relative flex flex-col justify-center items-center'>

            <div className='absolute top-[45px] w-72 h-3 bg-black/25'></div>
            <div className='absolute top-[160px] -left-10 rotate-[60deg] w-72 h-3 bg-black/25'></div>
            <div className='absolute top-[160px] -right-10 -rotate-[60deg] w-72 h-3 bg-black/25'></div>

            <div className='z-10 flex gap-14 flex-col justify-center items-center'>

                <div className='flex gap-20 justify-center items-center'>

                    <div onClick={paperClick} >
                        <div className='w-[145px] h-[150px] bg-blue-500 cursor-pointer p-4 rounded-full border-b-[6px] border-blue-600'>
                            <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                                <img src={paperIcon} alt="paper Icon" />
                            </div>
                        </div>
                    </div>

                    <div onClick={scissorsClick}>
                        <div className='w-[145px] h-[150px] bg-yellow-500 cursor-pointer p-4 rounded-full border-b-[6px] border-yellow-600'>
                            <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                                <img src={scissorsIcon} alt="scissors Icon" />
                            </div>
                        </div>
                    </div>

                </div>

                <div onClick={rockClick}>
                    <div className='w-[145px] h-[150px] bg-red-400 cursor-pointer p-4 rounded-full border-b-[6px] border-red-600'>
                        <div className='w-full h-full flex justify-center items-center duration-200 bg-white rounded-full border-t-[6px] border-gray-400 hover:border-white'>
                            <img src={rockIcon} alt="rock Icon" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserChoice