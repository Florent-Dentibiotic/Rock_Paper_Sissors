import './Score.css'

export default function Score() {
  return (
    <header className="score_header">
      <h1 className="score_h1">ROCK PAPER SCISSORS</h1>
      <div className="player_score">
        <h2 className="player_score_title">SCORE</h2>
        <p className="player_score_live">12</p>
      </div>
    </header>
  )
}
