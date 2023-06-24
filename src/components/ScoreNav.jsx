import React from 'react'
import logo from '../assets/images/logo.svg'

const ScoreNav = ({score}) => {
    return (
        <header className='w-fit md:w-3/5 mt-10 md:mt-10 py-3 pr-5 pl-6 flex gap-28 justify-between items-center rounded-2xl border-2 border-white/20'>
            <img className='pt-1 w-20 md:w-auto' src={logo} alt="logo" />
            <div className='px-6 md:px-14 py-2 md:py-4 bg-white/90 rounded-lg flex flex-col justify-center items-center'>
                <h3 className='bg-clip-text text-sm md:text-lg tracking-widest font-semibold bg-gradient-to-r text-transparent from-blue-600 to-blue-700'>SCORE</h3>
                <p className='text-3xl md:text-6xl opacity-75 font-bold'>{score}</p>
            </div>
        </header>
    )
}

export default ScoreNav