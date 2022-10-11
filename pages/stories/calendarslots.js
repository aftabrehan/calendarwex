import Stories from 'components/stories'
import CalendarSlots from 'components/calendarslots'
import EventTypes from 'components/event-types'
import MiniCalendar from 'components/minicalendar/SmallCalendar'
import DateMonth from 'components/date-month'

import EllipseIcon from '../../src/assets/ellipse-1.svg'

import stl from './Stories.module.scss'

const blankNoneWeek = {
  arg: 'BlankNoneWeek',
  variant: 'blankNoneWeek',
  type: 'week',
  event: [],
}

const topPartialSingleWeek = {
  arg: 'TopPartialSingleWeek',
  variant: 'topPartialSingleWeek',
  type: 'week',
  event: [
    <EventTypes width="110px" height="31px" borderRadius="0 0 3px 3px" />,
  ],
}

const bottomPartialSingleWeek = {
  arg: 'BottomPartialSingleWeek',
  variant: 'bottomPartialSingleWeek',
  type: 'week',
  event: [
    <EventTypes width="110px" height="31px" borderRadius="3px 3px 0 0" />,
  ],
}

const fullSingleWeek = {
  arg: 'FullSingleWeek',
  type: 'week',
  variant: 'fullSingleWeek',
  event: [<EventTypes width="110px" height="60px" />],
}

const middleSingleWeek = {
  arg: 'MiddleSingleWeek',
  type: 'week',
  variant: 'middleSingleWeek',
  event: [<EventTypes width="110px" height="62px" />],
}

const topFullSingleWeek = {
  arg: 'TopFullSingleWeek',
  type: 'week',
  variant: 'topFullSingleWeek',
  event: [<EventTypes width="110px" height="27px" />],
}

const bottomFullSingleWeek = {
  arg: 'BottomFullSingleWeek',
  type: 'week',
  variant: 'bottomFullSingleWeek',
  event: [<EventTypes width="110px" height="27px" />],
}

const blankNoneMonth = {
  arg: 'BlankNoneMonth',
  variant: 'blankNoneMonth',
  type: 'month',
  date: <DateMonth />,
  event: [],
}

const fullSingleMonth = {
  arg: 'FullSingleMonth',
  variant: 'fullSingleMonth',
  type: 'month',
  date: <DateMonth />,
  event: [
    <EventTypes
      icon={<EllipseIcon />}
      eventType="eventSmallHr"
      width="98px"
      height="19px"
      Cls={stl.eventContainer}
      padding="0"
    />,
  ],
}

const fullDoubleMonth = {
  arg: 'FullDoubleMonth',
  variant: 'fullDoubleMonth',
  type: 'month',
  date: <DateMonth />,
  event: [
    <EventTypes
      icon={<EllipseIcon />}
      eventType="eventSmallHr"
      width="98px"
      height="19px"
      padding="0"
    />,
    <EventTypes
      icon={<EllipseIcon />}
      eventType="eventSmallHr"
      width="98px"
      height="19px"
      padding="0"
    />,
  ],
}

const fullTripleMonth = {
  arg: 'FullTripleMonth',
  variant: 'fullTripleMonth',
  type: 'month',
  date: <DateMonth />,
  event: [
    <EventTypes
      icon={<EllipseIcon />}
      eventType="eventSmallHr"
      width="98px"
      height="19px"
      padding="0"
    />,
    <EventTypes
      icon={<EllipseIcon />}
      eventType="eventSmallHr"
      width="98px"
      height="19px"
      padding="0"
    />,
  ],
  toggle: (
    <div className={stl.toggle}>
      <span className={stl.toggleName}>+2 More</span>
    </div>
  ),
}

const yearMonthView = {
  arg: 'Year-MonthView',
  type: 'year',
  variant: 'yearMonthView',
  event: [],
  monthNumber: '01',
  monthData: <MiniCalendar />,
}

const CalendarSlotsStory = () => (
  <Stories
    argList={[
      blankNoneWeek,
      topPartialSingleWeek,
      bottomPartialSingleWeek,
      fullSingleWeek,
      middleSingleWeek,
      topFullSingleWeek,
      bottomFullSingleWeek,
      blankNoneMonth,
      fullSingleMonth,
      fullDoubleMonth,
      fullTripleMonth,
      yearMonthView,
    ]}
    template={args => <CalendarSlots {...args} />}
  />
)

export default CalendarSlotsStory
