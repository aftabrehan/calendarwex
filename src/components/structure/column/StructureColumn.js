import clsx from 'clsx'

import CalendarSlots from 'components/calendarslots'
import stl from '../Structure.module.scss'

const StructureColumn = ({
  customClass,
  width,
  variant,
  slotWidth,
  height,
  events,
  calendarSlotData,
}) => {
  const n = 24

  return (
    <div
      className={clsx(stl.structureColumn, customClass)}
      style={{ width, height }}
    >
      {[...Array(n)].map((item, i) => (
        <CalendarSlots
          key={i}
          variant={calendarSlotData?.variant || variant}
          width="100%"
          type={calendarSlotData?.type || 'week'}
          height="80px"
          event={calendarSlotData?.event || [events]}
        />
      ))}
    </div>
  )
}

export default StructureColumn
