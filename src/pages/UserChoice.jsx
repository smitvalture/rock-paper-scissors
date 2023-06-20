import React from 'react'
import Paper from '../components/Paper'
import Scissors from '../components/Scissors'
import Rock from '../components/Rock'

const UserChoice = ({ paperClick, scissorsClick, rockClick }) => {
    return (
        <div className='relative flex flex-col justify-center items-center'>

            <div className='absolute top-[45px] w-72 h-3 bg-black/25'></div>
            <div className='absolute top-[160px] -left-10 rotate-[60deg] w-72 h-3 bg-black/25'></div>
            <div className='absolute top-[160px] -right-10 -rotate-[60deg] w-72 h-3 bg-black/25'></div>

            <div className='flex gap-14 flex-col justify-center items-center scale-125'>

                <div className='flex gap-20 justify-center items-center'>

                    <div onClick={paperClick} >
                        <Paper />
                    </div>

                    <div onClick={scissorsClick}>
                        <Scissors />
                    </div>

                </div>

                <div onClick={rockClick}>
                    <Rock />
                </div>

            </div>

        </div>
    )
}

export default UserChoice