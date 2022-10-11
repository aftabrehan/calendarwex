import Stories from 'components/stories'
import StructureGrid from 'components/structure/grid'
import CalendarSlots from 'components/calendarslots'
import MiniCalendar from 'components/minicalendar/SmallCalendar'

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
    />
  )
}

const yearColumn = {
  arg: 'YearColumn',
  variant: 'yearColumn',
  months,
}

const StructureGridStory = () => (
  <Stories
    argList={[yearColumn]}
    template={args => <StructureGrid {...args} />}
  />
)

export default StructureGridStory
