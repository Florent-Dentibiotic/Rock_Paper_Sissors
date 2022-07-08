import './Score.css'

interface ScoreProps {
  score: number
}

export default function Score({ score }: ScoreProps) {
  return (
    <header className="score_header">
      <h1 className="score_h1">ROCK PAPER SCISSORS</h1>
      <div className="player_score">
        <h2 className="player_score_title">SCORE</h2>
        <p className="player_score_live">{score}</p>
      </div>
    </header>
  )
}
