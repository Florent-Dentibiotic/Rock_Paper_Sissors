import { useEffect, useState } from 'react'
import './App.css'
import Hands from './modules/Hands/Hands'
import Rules from './modules/Rules/Rules'
import Score from './modules/Score/Score'

function App() {
  const [score, setScore] = useState(0)

  useEffect(() => {
    const playerScore = localStorage.getItem('score')
    setScore(Number(playerScore))
  }, [])

  return (
    <div className="gamearea">
      <Score score={score} />
      <Hands score={score} setScore={setScore} />
      <Rules />
    </div>
  )
}

export default App
