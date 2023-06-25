import React, { useState } from 'react'

const Result = ({ userChoice, computerChoice, result, onClick, userWinner, computerWinner }) => {

    const [show, setShow] = useState(false)
    const [user, setUser] = useState("")
    const [computer, setComputer] = useState("")

    setTimeout(() => {
        setShow(true)
        setUser(userWinner)
        setComputer(computerWinner)
    }, 1000);

    return (
        <div className='grid grid-cols-2 md:flex md:flex-col lg:flex-row items-center md:mt-10 lg:mt-0 gap-52 md:gap-20 lg:gap-40 text-white font-semibold tracking-widest scale-50 md:scale-100'>
            <div className='order-1 flex flex-col md:gap-6 lg:gap-24 justify-center items-center'>
                <div className={`md:order-2 min-w-[120px] min-h-[120px] rounded-full bg-blue-900/30 ${user}`}>{userChoice}</div>
                <h3 className='text-2xl text-center w-80'>YOU PICKED</h3>
            </div>

            {show &&
                <div className='order-3 md:order-2 col-span-2 flex flex-col gap-5 lg:mt-24 justify-center items-center'>
                    <h3 className='text-6xl'>{result}</h3>
                    <button type='button' onClick={onClick} className='py-2 px-14 tracking-widest rounded-lg bg-white duration-300 text-lg font-bold text-blue-900 hover:text-red-800'>PLAY AGAIN</button>
                </div>
            }
            <div className='order-2 md:order-3 flex flex-col h-full md:gap-6 lg:gap-24 justify-between items-center'>
                <div className={`md:order-2 min-w-[220px] min-h-[220px] rounded-full bg-blue-900/30 ${computer}`}>{show && computerChoice}</div>
                <h3 className='text-2xl text-center w-80'>THE HOUSE PICKED</h3>
            </div>
        </div>
    )
}

export default Result