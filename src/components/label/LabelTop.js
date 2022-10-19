import clsx from 'clsx'

import stl from './Label.module.scss'

import BrainIcon from '../../assets/brain.svg'
import CamelIcon from '../../assets/camel.svg'
import CocktailGlassIcon from '../../assets/cocktail-glass.svg'
import HotBeverageIcon from '../../assets/hot-beverage.svg'
import ZombieIcon from '../../assets/zombie.svg'
import PartyPopperIcon from '../../assets/party-popper.svg'
import MassageIcon from '../../assets/women-getting-massage.svg'

const LabelTop = ({
  type,
  width,
  height,
  mainWidth,
  variant,
  dayHeader,
  gap,
  customClass,
}) => {
  return (
    <div className={clsx(stl.label, customClass)} style={{ width: mainWidth }}>
      <div>{gap}</div>
      {dayHeader?.map((item, i) => (
        <div key={i} className={clsx(stl[`${type}`])} style={{ width, height }}>
          {item.icon}
          {item.day}
        </div>
      ))}
    </div>
  )
}

export default LabelTop
