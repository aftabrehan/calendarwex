import Stories from 'components/stories'
import StructureGrid from 'components/structure/grid'
import StructureColumn from 'components/structure/column'
import CalendarSlots from 'components/calendarslots'
import MiniCalendar from 'components/minicalendar/SmallCalendar'
import DateMonth from 'components/date-month'
import LabelLeft from 'components/label/LabelLeft'

import stl from './Stories.module.scss'

let months = []

let month = []

let days = []

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

for (let i = 0; i < 35; i++) {
  month.push(
    <CalendarSlots
      variant="blankNoneMonth"
      type="month"
      date={<DateMonth />}
      event={[]}
      customClass={stl.calendarSlots}
      width="170px"
      height="134px"
    />
  )
}

for (let i = 0; i < 7; i++) {
  days.push(<StructureColumn />)
}

const yearColumn = {
  arg: 'YearColumn',
  variant: 'yearColumn',
  months,
}

const monthView = {
  arg: 'MonthView',
  variant: 'monthView',
  month,
}

const weekView = {
  arg: 'WeekView',
  type: 'weekView',
  hours: <LabelLeft />,
  days,
}

const dayView = {
  arg: 'DayView',
  type: 'dayView',
  hours: <LabelLeft />,
  day: <StructureColumn slotWidth="1100px" />,
}

const StructureGridStory = () => (
  <Stories
    argList={[yearColumn, monthView, weekView, dayView]}
    template={args => <StructureGrid {...args} />}
  />
)

export default StructureGridStory
