import clsx from 'clsx'

import stl from '../Structure.module.scss'

const StructureGrid = ({
  variant,
  customClass,
  customClassWeek,
  type,
  hours,
  width,
  height,
  days,
  day,
  months,
  month,
}) => (
  <div
    className={clsx(stl[`${variant}`], stl.common, customClass)}
    style={{ width, height }}
  >
    {months || month || (
      <div className={clsx(stl[`${type}`], customClassWeek)}>
        {hours}
        {days || day}
      </div>
    )}
  </div>
)

export default StructureGrid
