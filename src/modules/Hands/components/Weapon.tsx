import './Weapon.css'
import { handleClickProps } from '../Hands'

interface WeaponProps {
  weapon: {
    name: string
    img: string
    border: string
    placeContent: string
  }
  handleClick: (e: handleClickProps) => void
}

export default function Weapon({ weapon, handleClick }: WeaponProps) {
  return (
    <div className="weapon-position">
      <div
        className={`${weapon.border} ${weapon.placeContent} weapon`}
        onClick={() => handleClick(weapon)}
      >
        <img src={weapon.img} alt="" className={`${'weapon-kind'}`} />
      </div>
    </div>
  )
}
