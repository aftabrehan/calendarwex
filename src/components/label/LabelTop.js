import clsx from 'clsx'

import stl from './Label.module.scss'

import BrainIcon from '../../assets/brain.svg'
import CamelIcon from '../../assets/camel.svg'
import CocktailGlassIcon from '../../assets/cocktail-glass.svg'
import HotBeverageIcon from '../../assets/hot-beverage.svg'
import ZombieIcon from '../../assets/zombie.svg'
import PartyPopperIcon from '../../assets/party-popper.svg'
import MassageIcon from '../../assets/women-getting-massage.svg'

const LabelTop = ({ arg, type, variant, days, gap, customClass }) => {
  return (
    <div className={stl.label}>
      <div>{gap}</div>
      {days.map((item, i) => (
        <div key={i} className={clsx(stl[`${type}`], customClass)}>
          {item.icon}
          {item.day}
        </div>
      ))}
    </div>
  )
}

export default LabelTop

LabelTop.defaultProps = {
  arg: 'Week',
  type: 'row',
  days: [
    {
      day: 'Mon',
      icon: <BrainIcon />,
    },
    {
      day: 'Tue',
      icon: <CamelIcon />,
    },
    {
      day: 'Wed',
      icon: <CocktailGlassIcon />,
    },
    {
      day: 'Thu',
      icon: <HotBeverageIcon />,
    },
    {
      day: 'Fri',
      icon: <ZombieIcon />,
    },
    {
      day: 'Sat',
      icon: <PartyPopperIcon />,
    },
    {
      day: 'Sun',
      icon: <MassageIcon />,
    },
  ],
}
