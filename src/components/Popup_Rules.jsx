import React, { useState } from 'react'
import imgRules from '../assets/images/image-rules.svg'
import iconClose from '../assets/images/icon-close.svg'

const Popup_Rules = ({ onClick }) => {


    return (
        <section className='fixed top-0 left-0 w-screen h-screen backdrop-blur-lg flex justify-center items-center'>
            <div className='w-fit h-fit py-10 bg-white rounded-lg flex gap-14 flex-col justify-between items-center'>
                <div className='flex w-full px-10 justify-between items-center'>
                    <h1 className='font-extrabold text-3xl opacity-70'>RULES</h1>
                    <img onClick={onClick} className='cursor-pointer' src={iconClose} alt="close IMG" />
                </div>
                <img className='mx-12' src={imgRules} alt="Rules IMG" />
            </div>
        </section>
    )
}

export default Popup_Rules