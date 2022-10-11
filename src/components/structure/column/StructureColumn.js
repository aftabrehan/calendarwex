import CalendarSlots from 'components/calendarslots'
import stl from '../Structure.module.scss'

const StructureColumn = () => {
  const n = 24

  return (
    <div className={stl.structureColumn}>
      {[...Array(n)].map((item, i) => (
        <CalendarSlots
          height="80px"
          key={i}
          variant="blankNoneWeek"
          type="week"
          event={[]}
          customClass={stl.calendarSlots}
        />
      ))}
    </div>
  )
}

export default StructureColumn
