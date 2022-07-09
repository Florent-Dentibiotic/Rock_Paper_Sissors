import Weapon from './components/Weapon'
import './Hands.css'
import Rock from '../../assets/images/icon-rock.svg'
import Paper from '../../assets/images/icon-paper.svg'
import Scissors from '../../assets/images/icon-scissors.svg'
import Triangle from '../../assets/images/bg-triangle.svg'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getRandomInt } from '../../utils/random'

export type handleClickProps = {
  name: string
  img: string
  border: string
  placeContent: string
}

interface HandsProps {
  score: number
  setScore: Dispatch<SetStateAction<number>>
}

interface weaponsProps {
  [key: string]: handleClickProps
}

const weapons: weaponsProps = {
  Paper: {
    name: 'paper',
    img: Paper,
    placeContent: 'left',
    border: 'blue',
  },
  Scissors: {
    name: 'scissors',
    img: Scissors,
    placeContent: 'right',
    border: 'yellow',
  },
  Rock: {
    name: 'rock',
    img: Rock,
    placeContent: 'center',
    border: 'red',
  },
}

interface solutionProps {
  [key: string]: string[]
}

const solution: solutionProps = {
  paper: ['rock'],
  scissors: ['paper'],
  rock: ['scissors'],
}

export default function Hands({ score, setScore }: HandsProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [playerChoice, setPlayerChoice]: any = useState({})
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [houseChoice, setHouseChoice]: any = useState({})
  const [scoreView, setScoreView] = useState(false)
  const [winner, setWinner] = useState('unknown')

  const handlePlayerChoice = (e: handleClickProps) => {
    setPlayerChoice({
      name: e.name,
      img: e.img,
      placeContent: 'middle',
      border: e.border,
    })
    setTimeout(() => handleHouseChoice(), 650)
  }

  const handleHouseChoice = () => {
    const house = weapons[Object.keys(weapons)[getRandomInt(3)]]
    setHouseChoice({
      name: house.name,
      img: house.img,
      placeContent: 'middle',
      border: house.border,
    })
  }

  useEffect(() => {
    if (houseChoice.name) {
      if (houseChoice.name === playerChoice.name) {
        setWinner('tie')
        setTimeout(() => setScoreView(true), 650)
        return
      }
      solution[playerChoice.name].includes(houseChoice.name)
        ? (setWinner('player'),
          setScore(score + 1),
          localStorage.setItem('score', (score + 1).toString()))
        : (setWinner('house'),
          setScore(score - 1),
          localStorage.setItem('score', (score - 1).toString()))
      setTimeout(() => setScoreView(true), 650)
    }
  }, [houseChoice])

  const handleReset = () => {
    setPlayerChoice({})
    setHouseChoice({})
    setScoreView(false)
  }

  if (playerChoice.name) {
    return (
      <main className={`hands-selected ${!scoreView ? 'onload' : 'results'}`}>
        <article className="hands-selected-article">
          <h3 className="hands-selected-title">YOU PICKED</h3>
          <Weapon
            weapon={playerChoice}
            position={'weapon-selected'}
            handleClick={handlePlayerChoice}
          />
        </article>
        {scoreView ? (
          <article className="hands-selected-score">
            <h3 className="hands-selected-score-title">
              {winner === 'player' ? 'YOU WIN' : winner === 'tie' ? 'TIE' : 'YOU LOSE'}
            </h3>
            <button className="hands-selected-score-button" onClick={handleReset}>
              PLAY AGAIN
            </button>
          </article>
        ) : null}
        <article className="hands-selected-article">
          <h3 className="hands-selected-title">THE HOUSE PICKED</h3>
          {houseChoice.name ? (
            <Weapon
              weapon={houseChoice}
              position={'weapon-selected'}
              handleClick={handlePlayerChoice}
            />
          ) : (
            <div className="house-unselected"></div>
          )}
        </article>
      </main>
    )
  }
  return (
    <main className="hands">
      <img src={Triangle} alt="" className="triangle" />
      <Weapon
        weapon={weapons.Paper}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
      <Weapon
        weapon={weapons.Scissors}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
      <Weapon
        weapon={weapons.Rock}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
    </main>
  )
}
