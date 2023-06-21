import React from 'react'

const Decision = ({ userChoice, computerChoice }) => {
    return (
        <div className='grid grid-cols-2 gap-40 place-content-center text-white font-semibold tracking-widest'>
            <div className='flex flex-col gap-32 justify-center items-center'>
                <h3 className='text-2xl'>YOU PICKED</h3>
                <div className='min-w-[120px] min-h-[120px] rounded-full bg-blue-900/30 scale-[2]'>{userChoice}</div>
            </div>
            <div className='flex flex-col gap-32 justify-center items-center'>
                <h3 className='text-2xl'>THE HOUSE PICKED</h3>
                <div className='min-w-[120px] min-h-[120px] rounded-full bg-blue-900/30 scale-[2]'>                </div>
            </div>
        </div>
    )
}

export default Decision 