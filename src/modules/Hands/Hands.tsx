import Weapon from './components/Weapon'
import './Hands.css'
import Rock from '../../assets/images/icon-rock.svg'
import Paper from '../../assets/images/icon-paper.svg'
import Scissors from '../../assets/images/icon-scissors.svg'
import Triangle from '../../assets/images/bg-triangle.svg'
import { Dispatch, SetStateAction, useState } from 'react'
import { getRandomInt } from '../../utils/random'

export type handleClickProps = {
  name: string
  img: string
  border: string
  placeContent: string
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

export default function Hands() {
  const [playerChoice, setPlayerChoice]: [
    object,
    Dispatch<SetStateAction<handleClickProps>>
  ] = useState({})
  const [houseChoice, setHouseChoice]: [
    object,
    Dispatch<SetStateAction<handleClickProps>>
  ] = useState({})
  const [score, setScore] = useState(false)

  const handleHouseChoice = () => {
    const house = weapons[Object.keys(weapons)[getRandomInt()]]
    console.log(house)
    setHouseChoice({
      name: house.name,
      img: house.img,
      placeContent: 'middle',
      border: house.border,
    })
    setTimeout(() => setScore(true), 1000)
  }

  const handlePlayerChoice = (e: handleClickProps) => {
    console.log(e)
    setPlayerChoice({
      name: e.name,
      img: e.img,
      placeContent: 'middle',
      border: e.border,
    })
    setTimeout(() => handleHouseChoice(), 1000)
  }

  if (playerChoice.name) {
    return (
      <main className={`hands-selected ${!score ? 'onload' : 'results'}`}>
        <article className="hands-selected-article">
          <h3 className="hands-selected-title">YOU PICKED</h3>
          <Weapon
            weapon={playerChoice}
            position={'weapon-selected'}
            handleClick={handlePlayerChoice}
          />
        </article>
        {score ? (
          <article className="hands-selected-article">
            <h1>You win</h1>
            <button>PLAY AGAIN</button>
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
