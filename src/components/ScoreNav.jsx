import React from 'react'
import logo from '../assets/images/logo.svg'

const ScoreNav = ({score}) => {
    return (
        <div className='w-3/5 mt-10 py-3 pr-5 pl-6 flex justify-between items-center rounded-2xl border-2 border-white/60'>
            <img className='pt-1' src={logo} alt="logo" />
            <div className='px-14 py-4 bg-white/90 rounded-lg flex flex-col justify-center items-center'>
                <h3 className='bg-clip-text text-lg tracking-widest font-semibold bg-gradient-to-r text-transparent from-blue-600 to-blue-700'>SCORE</h3>
                <p className='text-6xl opacity-75 font-bold'>{score}</p>
            </div>
        </div>
    )
}

export default ScoreNav