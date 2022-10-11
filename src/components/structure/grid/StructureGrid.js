import clsx from 'clsx'

import stl from '../Structure.module.scss'
import CalendarSlots from 'components/calendarslots'
import MiniCalendar from 'components/minicalendar/SmallCalendar'

const StructureGrid = ({ variant, hours, days, day, months, month }) => (
  <div className={clsx(stl[`${variant}`], stl.common)}>
    {months || month || (
      <div className={stl.weekView}>
        {hours}
        {days || day}
      </div>
    )}
  </div>
)

export default StructureGrid
