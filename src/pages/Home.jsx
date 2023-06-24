import React, { useEffect, useState } from 'react'
import Popup_Rules from '../components/Popup_Rules'
import ScoreNav from '../components/ScoreNav'
import Footer from '../components/Footer'
import UserChoice from './UserChoice'
import Decision from './Decision'
import Rock from '../components/Rock'
import Paper from '../components/Paper'
import Scissors from '../components/Scissors'
import Result from './Result'

const Home = () => {

  const [rules, setRules] = useState(null)
  const [result, setResult] = useState("")
  const [score, setScore] = useState(0)
  const [user, setUser] = useState(null)
  const [computer, setComputer] = useState(-1)
  const [page, setPage] = useState(0)
  const [render, setRender] = useState(false)

  //console.log(user);
  useEffect(() => {
    if (render === true) {
      handleResult()
      setRender(false)      
    }
  }, [render])


  console.log("1 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);

  function GenerateRandomNumber() {
    const randomNumber = Math.round(Math.random() * 2);
    setComputer(randomNumber)
  }
  console.log("2 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);

  function handleClick(choice) {
    setUser(choice)
    setPage(2);
    GenerateRandomNumber();
    console.log("5 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);
    setTimeout(() => {
      handleResult();
      console.log("6 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);
    }, 1000);

    setTimeout(() => {
      setRender(true)
    }, 500);
  }

  console.log("3 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);

  function handleResult() {
    console.log("7 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);
    if (user === computer) {
      setResult("DRAW");
    } else if (user === 0 && computer === 1) {
      setResult("YOU LOSE");
      setScore((current) => current - 1);
    } else if (user === 0 && computer === 2) {
      setResult("YOU WIN");
      setScore((current) => current + 1);
    } else if (user === 1 && computer === 0) {
      setResult("YOU WIN");
      setScore((current) => current + 1);
    } else if (user === 1 && computer === 2) {
      setResult("YOU LOSE");
      setScore((current) => current - 1);
    } else if (user === 2 && computer === 0) {
      setResult("YOU LOSE");
      setScore((current) => current - 1);
    } else if (user === 2 && computer === 1) {
      setResult("YOU WIN");
      setScore((current) => current + 1);
    } else {
      console.log('Error: Invalid user or computer choice');
    }
  }




  console.log("4 Page:", page, " User:", user, " Computer:", computer, " Result:", result, " Score:", score);



  return (
    <section className='w-screen h-screen flex flex-col items-center bg-gradient-radial-to-tm from-[#2c3c59] to-[#171931] font-Barlow'>
      {rules && <Popup_Rules onClick={() => setRules(false)} />}

      <ScoreNav score={score} />

      <div className='w-full h-full flex justify-center items-center'>

        {page === 0 && (
          <UserChoice
            rockClick={() => { handleClick(0) }}
            paperClick={() => { handleClick(1) }}
            scissorsClick={() => { handleClick(2) }}
          />
        )}

        {/* {
          page === 1 && <Decision
            userChoice={user === 0 ? <Rock /> : user === 1 ? <Paper /> : <Scissors />}
          />
        } */}

        {
          page === 2 && <Result
            result={result}
            onClick={() => { setPage(0); setUser(null); setComputer(-1) }}
            userChoice={user === 0 ? <Rock /> : user === 1 ? <Paper /> : user === 2 ? <Scissors /> : user === 0 || user === 1 || user === 2 ? null : null}
            computerChoice={computer === 0 ? <Rock /> : computer === 1 ? <Paper /> : computer === 2 ? <Scissors /> : user === 0 || user === 1 || user === 2 ? null : null}
          />
        }

      </div>

      <Footer onClick={() => setRules(true)} />

    </section>
  )
}

export default Home