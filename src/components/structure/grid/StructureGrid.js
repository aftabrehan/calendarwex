import clsx from 'clsx'
import stl from '../Structure.module.scss'

const StructureGrid = ({ variant, hours, days, day, months, month }) => {
  return (
    <div className={clsx(stl[`${variant}`], stl.common)}>
      {months || month || (
        <div className={stl.weekView}>
          {hours}
          {days || day}
        </div>
      )}
    </div>
  )
}

export default StructureGrid
