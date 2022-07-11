import { useState } from 'react'
import Modal from '../Modal/Modal'
import './Rules.css'
import normalRules from '../../assets/images/image-rules.svg'
import bonusRules from '../../assets/images/image-rules-bonus.svg'

interface RulesProps {
  game: string
  setGame: () => void
}

export default function Rules({ game, setGame }: RulesProps) {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <footer className="footer">
        <button onClick={setGame} className="footer-button">
          {game === 'normal' ? 'BONUS' : 'NORMAL'}
        </button>
        <button onClick={handleShowModal} className="footer-button">
          RULES
        </button>
      </footer>
      {showModal ? (
        <Modal
          rules={game === 'normal' ? normalRules : bonusRules}
          closeModal={() => setShowModal(false)}
        />
      ) : null}
    </>
  )
}
