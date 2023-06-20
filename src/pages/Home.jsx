import React, { useEffect, useState } from 'react'
import Popup_Rules from '../components/Popup_Rules'
import ScoreNav from '../components/ScoreNav'
import Footer from '../components/Footer'
import UserChoice from './UserChoice'

const Home = () => {

  const [rules, setRules] = useState(null)
  const [score, setScore] = useState(0)
  const [user, setUser] = useState()
  const [computer, setComputer] = useState()

  useEffect(() => {
    setRules(false)
    GenerateRandomNumber()
  }, [])

  //console.log(user);

  function GenerateRandomNumber() {
    const randomNumber = Math.round(Math.random() * 2);
    setComputer(randomNumber)
  }

  console.log(computer);


  return (
    <section className='w-screen h-screen flex flex-col items-center bg-gradient-radial-to-tm from-[#2c3c59] to-[#171931] font-Barlow'>
      {rules && <Popup_Rules onClick={() => setRules(false)} />}

      <ScoreNav score={score} />

      <div className='w-full h-full flex justify-center items-center'>

        <UserChoice
          rockClick={() => setUser(0)}
          paperClick={() => setUser(1)}
          scissorsClick={() => setUser(2)}
        />

      </div>

      <Footer onClick={() => setRules(true)} />

    </section>
  )
}

export default Home