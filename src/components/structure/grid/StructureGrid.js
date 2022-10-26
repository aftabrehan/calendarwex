import clsx from 'clsx'

import stl from '../Structure.module.scss'

const StructureGrid = ({
  id,
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
    id={id}
    className={clsx(stl[`${variant}`], stl.common, customClass)}
    style={{ width, height }}
  >
    {months || month || (
      <div id={id} className={clsx(stl[`${type}`], customClassWeek)}>
        {days || day}
      </div>
    )}
  </div>
)

export default StructureGrid
