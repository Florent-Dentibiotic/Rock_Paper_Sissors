import Weapon from '../Hands/components/Weapon'
import './Bonus.css'
import Rock from '../../assets/images/icon-rock.svg'
import Paper from '../../assets/images/icon-paper.svg'
import Scissors from '../../assets/images/icon-scissors.svg'
import Lizard from '../../assets/images/icon-lizard.svg'
import Spock from '../../assets/images/icon-spock.svg'
import Pentagon from '../../assets/images/bg-pentagon.svg'
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
    placeContent: 'top-right',
    border: 'blue',
  },
  Scissors: {
    name: 'scissors',
    img: Scissors,
    placeContent: 'top',
    border: 'yellow',
  },
  Rock: {
    name: 'rock',
    img: Rock,
    placeContent: 'bottom-right',
    border: 'red',
  },
  Lizard: {
    name: 'lizard',
    img: Lizard,
    placeContent: 'bottom-left',
    border: 'purple',
  },
  Spock: {
    name: 'spock',
    img: Spock,
    placeContent: 'top-left',
    border: 'cyan',
  },
}

interface solutionProps {
  [key: string]: string[]
}

const solution: solutionProps = {
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  rock: ['scissors', 'lizard'],
  spock: ['scissors', 'rock'],
  lizard: ['paper', 'spock'],
}

export default function Bonus({ score, setScore }: HandsProps) {
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
    const house = weapons[Object.keys(weapons)[getRandomInt(5)]]
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
          localStorage.setItem('bonusScore', (score + 1).toString()))
        : (setWinner('house'),
          setScore(score - 1),
          localStorage.setItem('bonusScore', (score - 1).toString()))
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
      <main className={`bonus-selected ${!scoreView ? 'onload' : 'results'}`}>
        <article className="hands-selected-article">
          <h3 className="hands-selected-title">YOU PICKED</h3>
          <Weapon
            bonus="weapon-bonus"
            weapon={playerChoice}
            position={'weapon-selected'}
          />
        </article>
        <div className="hands-results-container">
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
        </div>

        <article className="hands-selected-article">
          <h3 className="hands-selected-title">THE HOUSE PICKED</h3>
          {houseChoice.name ? (
            <Weapon
              bonus="weapon-bonus"
              weapon={houseChoice}
              position={'weapon-selected'}
            />
          ) : (
            <div className="house-unselected"></div>
          )}
        </article>
      </main>
    )
  }
  return (
    <main className="bonus">
      <img src={Pentagon} alt="" className="pentagon" />
      <Weapon
        bonus="weapon-bonus"
        weapon={weapons.Paper}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
      <Weapon
        bonus="weapon-bonus"
        weapon={weapons.Scissors}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
      <Weapon
        bonus="weapon-bonus"
        weapon={weapons.Rock}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
      <Weapon
        bonus="weapon-bonus"
        weapon={weapons.Spock}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
      <Weapon
        bonus="weapon-bonus"
        weapon={weapons.Lizard}
        position={'absolute'}
        handleClick={handlePlayerChoice}
      />
    </main>
  )
}
