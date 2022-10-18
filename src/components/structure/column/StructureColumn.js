import clsx from 'clsx'

import CalendarSlots from 'components/calendarslots'
import stl from '../Structure.module.scss'

const StructureColumn = ({ customClass, width, slotWidth, height, events }) => {
  const n = 24

  return (
    <div
      className={clsx(stl.structureColumn, customClass)}
      style={{ width: '100%', height }}
    >
      {[...Array(n)].map((item, i) => (
        <CalendarSlots
          key={i}
          variant="blankNoneWeek"
          width="100%"
          type="week"
          height="80px"
          event={[events]}
        />
      ))}
    </div>
  )
}

export default StructureColumn
