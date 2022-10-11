import clsx from 'clsx'

import CalendarSlots from 'components/calendarslots'
import stl from '../Structure.module.scss'

const StructureColumn = ({ customClass, slotWidth }) => {
  const n = 24

  return (
    <div className={clsx(stl.structureColumn, customClass)}>
      {[...Array(n)].map((item, i) => (
        <CalendarSlots
          height="80px"
          key={i}
          variant="blankNoneWeek"
          type="week"
          event={[]}
          width={slotWidth}
        />
      ))}
    </div>
  )
}

export default StructureColumn
