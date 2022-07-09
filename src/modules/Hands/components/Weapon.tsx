import './Weapon.css'
import { handleClickProps } from '../Hands'

interface WeaponProps {
  weapon: {
    name: string
    img: string
    border: string
    placeContent: string
  }
  bonus?: string
  position: string
  handleClick?: (e: handleClickProps) => void
}

export default function Weapon({ weapon, bonus, position, handleClick }: WeaponProps) {
  return (
    <div
      className={`${position}`}
      onClick={
        handleClick
          ? () => handleClick(weapon)
          : () => {
              return
            }
      }
    >
      <div className={`${weapon.border} ${weapon.placeContent} weapon`}>
        <img src={weapon.img} alt="" className={`${bonus} weapon-kind`} />
      </div>
    </div>
  )
}
