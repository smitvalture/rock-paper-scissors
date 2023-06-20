import React from 'react'

const Footer = ({ onClick }) => {
    return (
        <footer className='flex w-full justify-end px-14'>
            <p onClick={onClick} className='border border-white/80 px-6 py-1 mb-8 cursor-pointer hover:bg-black/25 duration-300 rounded-lg text-white font-medium'>RULES</p>
        </footer>
    )
}

export default Footer