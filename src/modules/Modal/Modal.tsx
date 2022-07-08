import './Modal.css'
import Close from '../../assets/images/icon-close.svg'

interface ModalProps {
  rules: string
  closeModal: () => void
}

export default function Modal({ rules, closeModal }: ModalProps) {
  return (
    <div className="modal-bg" onClick={closeModal}>
      <div className="modal-rules-bg">
        <div className="modal-rules-header">
          <h3 className="modal-rules-title">RULES</h3>
          <img
            src={Close}
            alt="cross to close modal"
            className="modal-rules-close"
            onClick={closeModal}
          />
        </div>

        <img src={rules} alt="" />
      </div>
    </div>
  )
}
