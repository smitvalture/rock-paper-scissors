import React, { useState } from 'react'
import Popup_Rules from '../components/Popup_Rules'

const Home = () => {

  const [rules, setRules] = useState(true)


  return (
    <section className='w-screen h-screen flex justify-center items-center bg-gradient-radial-to-tm from-[#2c3c59] to-[#1d203d] font-Barlow'>
      {rules && <Popup_Rules onClick={()=>setRules(false)} />}
    </section>
  )
}

export default Home