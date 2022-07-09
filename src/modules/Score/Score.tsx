import './Score.css'

interface ScoreProps {
  score: number
  game: string
}

export default function Score({ score, game }: ScoreProps) {
  return (
    <header className="score_header">
      <h1 className={game === 'normal' ? 'score_h1' : 'score_h1_bonus'}>
        {game === 'normal' ? 'ROCK PAPER SCISSORS' : 'ROCK PAPER SCISSORS LIZARD SPOCK'}{' '}
      </h1>
      <div className="player_score">
        <h2 className="player_score_title">SCORE</h2>
        <p className="player_score_live">{score}</p>
      </div>
    </header>
  )
}
