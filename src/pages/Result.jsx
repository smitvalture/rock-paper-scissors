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
        <div className='flex items-center gap-40 text-white font-semibold tracking-widest'>
            <div className='flex flex-col gap-32 justify-center items-center'>
                <h3 className='text-2xl'>YOU PICKED</h3>
                <div className={`min-w-[120px] min-h-[120px] rounded-full bg-blue-900/30 ${user}`}>{userChoice}</div>
            </div>

            {show &&
                <div className='flex flex-col gap-5 mt-36 justify-center items-center'>
                    <h3 className='text-5xl'>{result}</h3>
                    <button type='button' onClick={onClick} className='py-2 px-14 tracking-widest rounded-lg bg-white duration-300 font-bold text-blue-900 hover:text-red-800'>PLAY AGAIN</button>
                </div>
            }
            <div className='flex flex-col h-full gap-32 justify-between items-center'>
                <h3 className='text-2xl'>THE HOUSE PICKED</h3>
                <div className={`min-w-[220px] min-h-[220px] rounded-full bg-blue-900/30 ${computer}`}>{show && computerChoice}</div>
            </div>
        </div>
    )
}

export default Result