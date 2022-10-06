import clsx from 'clsx'

import stl from './Label.module.scss'

import Icon1 from '../../assets/brain.svg'
import Icon2 from '../../assets/camel.svg'
import Icon3 from '../../assets/cocktail-glass.svg'
import Icon4 from '../../assets/hot-beverage.svg'
import Icon5 from '../../assets/zombie.svg'
import Icon6 from '../../assets/party-popper.svg'
import Icon7 from '../../assets/women-getting-massage.svg'

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
      icon: <Icon1 />,
    },
    {
      day: 'Tue',
      icon: <Icon2 />,
    },
    {
      day: 'Wed',
      icon: <Icon3 />,
    },
    {
      day: 'Thu',
      icon: <Icon4 />,
    },
    {
      day: 'Fri',
      icon: <Icon5 />,
    },
    {
      day: 'Sat',
      icon: <Icon6 />,
    },
    {
      day: 'Sun',
      icon: <Icon7 />,
    },
  ],
}
