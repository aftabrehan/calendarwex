import clsx from 'clsx'
import stl from '../Structure.module.scss'

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

let months = []

for (let i = 0; i < 12; i++) {
  months.push(
    <CalendarSlots
      type="year"
      variant="yearMonthView"
      event={[]}
      monthNumber="01"
      monthData={<MiniCalendar />}
      key={months.length}
      customClass={stl.monthDaySlots}
    />
  )
}

StructureGrid.defaultProps = {
  arg: 'YearColumn',
  variant: 'yearColumn',
  months,
}
