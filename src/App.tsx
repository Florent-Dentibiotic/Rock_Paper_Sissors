import './App.css'
import Hands from './modules/Hands/Hands'
import Rules from './modules/Rules/Rules'
import Score from './modules/Score/Score'

function App() {
  return (
    <div className="gamearea">
      <Score />
      <Hands />
      <Rules />
    </div>
  )
}

export default App
