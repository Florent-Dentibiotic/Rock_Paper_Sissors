import Weapon from './components/Weapon'
import './Hands.css'
import Rock from '../../assets/images/icon-rock.svg'
import Paper from '../../assets/images/icon-paper.svg'
import Scissors from '../../assets/images/icon-scissors.svg'
import Triangle from '../../assets/images/bg-triangle.svg'
import { useState } from 'react'

export type handleClickProps = {
  name: string
  img: string
  border: string
  placeContent: string
}

const weapons = {
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

export default function Hands() {
  const [playerChoice, setPlayerChoice] = useState(null)

  const handlePlayerChoice = (e: handleClickProps) => {
    console.log(e)
    const choice = {
      name: e.name,
      img: e.img,
      placeContent: 'middle',
      border: e.border,
    }
    setPlayerChoice(choice)
    setTimeout(() => setPlayerChoice(null), 1000)
  }

  if (playerChoice) {
    return (
      <main className="hands">
        <h3>YOU CHOOSE</h3>
        <Weapon weapon={playerChoice} handleClick={handlePlayerChoice} />
      </main>
    )
  }
  return (
    <main className="hands">
      <img src={Triangle} alt="" className="triangle" />
      <Weapon weapon={weapons.Paper} handleClick={handlePlayerChoice} />
      <Weapon weapon={weapons.Scissors} handleClick={handlePlayerChoice} />
      <Weapon weapon={weapons.Rock} handleClick={handlePlayerChoice} />
    </main>
  )
}
