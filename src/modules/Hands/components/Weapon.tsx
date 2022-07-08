import './Weapon.css'
import { handleClickProps } from '../Hands'

interface WeaponProps {
  weapon: {
    name: string
    img: string
    border: string
    placeContent: string
  }
  position: string
  handleClick: (e: handleClickProps) => void
}

export default function Weapon({ weapon, position, handleClick }: WeaponProps) {
  return (
    <div className={` ${position}`}>
      <div
        className={`${weapon.border} ${weapon.placeContent} weapon`}
        onClick={() => handleClick(weapon)}
      >
        <img src={weapon.img} alt="" className={`${'weapon-kind'}`} />
      </div>
    </div>
  )
}
