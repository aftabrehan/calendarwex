import CalendarSlots from 'components/calendarslots'
import stl from './Structure.module.scss'

const StructureColumn = () => {
  const n = 24

  return (
    <div>
      {[...Array(n)].map((item, i) => (
        <CalendarSlots key={i} variant="blankNoneWeek" type="week" event={[]} />
      ))}
    </div>
  )
}

export default StructureColumn
