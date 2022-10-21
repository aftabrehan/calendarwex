import Stories from 'components/stories'
import CalendarSlots from 'components/calendarslots'
import MiniCalendar from 'components/minicalendar/SmallCalendar'
import DateMonth from 'components/date-month'

import EllipseIcon from 'assets/ellipse.svg'

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
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      width: '110px',
      height: '31px',
      borderRadius: '0 0 3px 3px',
      eventType: 'eventDefHr',
    },
  ],
}

const bottomPartialSingleWeek = {
  arg: 'BottomPartialSingleWeek',
  variant: 'bottomPartialSingleWeek',
  type: 'week',
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      width: '110px',
      height: '31px',
      borderRadius: '3px 3px 0 0',
      eventType: 'eventDefHr',
    },
  ],
}

const fullSingleWeek = {
  arg: 'FullSingleWeek',
  type: 'week',
  variant: 'fullSingleWeek',
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      width: '110px',
      height: '100%',
      borderRadius: '3px 3px 0 0',
      eventType: 'eventDescHr',
      borderRadius: '3px',
    },
  ],
}

const middleSingleWeek = {
  arg: 'MiddleSingleWeek',
  type: 'week',
  variant: 'middleSingleWeek',
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      width: '110px',
      height: '72px',
      eventType: 'eventDescHr',
    },
  ],
}

const topFullSingleWeek = {
  arg: 'TopFullSingleWeek',
  type: 'week',
  variant: 'topFullSingleWeek',
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      width: '110px',
      height: '27px',
      eventType: 'eventDefHr',
    },
  ],
}

const bottomFullSingleWeek = {
  arg: 'BottomFullSingleWeek',
  type: 'week',
  variant: 'bottomFullSingleWeek',
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      width: '110px',
      height: '27px',
      eventType: 'eventDefHr',
    },
  ],
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
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      icon: <EllipseIcon />,
      eventType: 'eventSmallHr',
      width: '118px',
      customClass: stl.eventContainer,
      padding: '0',
      eventType: 'eventSmallHr',
      justifyContent: 'space-between',
    },
  ],
}

const fullDoubleMonth = {
  arg: 'FullDoubleMonth',
  variant: 'fullDoubleMonth',
  type: 'month',
  date: <DateMonth />,
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      icon: <EllipseIcon />,
      eventType: 'eventSmallHr',
      width: '118px',
      padding: '0',
      eventType: 'eventSmallHr',
    },
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      icon: <EllipseIcon />,
      eventType: 'eventSmallHr',
      width: '118px',
      padding: '0',
      eventType: 'eventSmallHr',
    },
  ],
}

const fullTripleMonth = {
  arg: 'FullTripleMonth',
  variant: 'fullTripleMonth',
  type: 'month',
  date: <DateMonth />,
  event: [
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      icon: <EllipseIcon />,
      eventType: 'eventSmallHr',
      width: '118px',
      padding: '0',
      eventType: 'eventSmallHr',
    },
    {
      event: { eventName: 'Event Name', eventTime: '08:00' },
      icon: <EllipseIcon />,
      eventType: 'eventSmallHr',
      width: '118px',
      padding: '0',
      eventType: 'eventSmallHr',
    },
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
