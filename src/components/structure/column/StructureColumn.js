import clsx from 'clsx'

import CalendarSlots from 'components/calendarslots'
import stl from '../Structure.module.scss'

const StructureColumn = ({ customClass, width, slotWidth, height }) => {
  const n = 24

  return (
    <div className={clsx(stl.structureColumn, customClass)} style={{ width }}>
      {[...Array(n)].map((item, i) => (
        <CalendarSlots
          key={i}
          variant="blankNoneWeek"
          width={slotWidth}
          type="week"
          height="80px"
          event={[]}
        />
      ))}
    </div>
  )
}

export default StructureColumn
