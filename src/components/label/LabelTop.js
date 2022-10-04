import stl from './Label.module.scss'
import clsx from 'clsx'

const LabelTop = ({ arg, variant, days, gap, customClass }) => {
  return (
    <div className={stl.label}>
      <div>{gap}</div>
      {days.map((item, i) => (
        <div key={i} className={clsx(stl[`${variant}`], customClass)}>
          {item.icon}
          {item.day}
        </div>
      ))}
    </div>
  )
}

export default LabelTop
