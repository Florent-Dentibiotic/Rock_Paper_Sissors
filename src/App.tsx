import { useEffect, useState } from 'react'
import './App.css'
import Bonus from './modules/Bonus/Bonus'
import Hands from './modules/Hands/Hands'
import Rules from './modules/Rules/Rules'
import Score from './modules/Score/Score'

function App() {
  const [score, setScore] = useState(0)
  const [scoreBonus, setScoreBonus] = useState(0)
  const [game, setGame] = useState('normal')

  useEffect(() => {
    const playerScore = localStorage.getItem('score')
    setScore(Number(playerScore))
    const bonusScore = localStorage.getItem('bonusScore')
    setScoreBonus(Number(bonusScore))
  }, [])

  const toogleGame = () => {
    game === 'normal' ? setGame('bonus') : setGame('normal')
  }

  return (
    <div className="gamearea">
      <Score score={game === 'normal' ? score : scoreBonus} game={game} />
      {game === 'normal' ? (
        <Hands score={score} setScore={setScore} />
      ) : (
        <Bonus score={scoreBonus} setScore={setScoreBonus} />
      )}
      <Rules game={game} setGame={toogleGame} />
    </div>
  )
}

export default App
