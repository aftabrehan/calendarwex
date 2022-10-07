import Stories from 'components/stories'
import CalendarSlots from 'components/calendarslots'
import EventTypes from 'components/event-types'

const blankNone = {
  arg: 'BlankNone',
  variant: 'blankNone',
}

const topPartialSingle = {
  arg: 'TopPartialSingle',
  variant: 'topPartialSingle',
  event: <EventTypes width="110px" height="31px" borderRadius="0 0 3px 3px" />,
}

const bottomPartialSingle = {
  arg: 'BottomPartialSingle',
  variant: 'bottomPartialSingle',
  event: <EventTypes width="110px" height="31px" borderRadius="3px 3px 0 0" />,
}

const fullSingle = {
  arg: 'FullSingle',
  type: 'week',
  variant: 'fullSingle',
  event: <EventTypes width="110px" height="60px" />,
}

const middleSingle = {
  arg: 'MiddleSingle',
  type: 'week',
  variant: 'middleSingle',
  event: <EventTypes width="110px" height="62px" />,
}

const topFullSingle = {
  arg: 'TopFullSingle',
  type: 'week',
  variant: 'topFullSingle',
  event: <EventTypes width="110px" height="27px" />,
}

const bottomFullSingle = {
  arg: 'BottomFullSingle',
  type: 'week',
  variant: 'bottomFullSingle',
  event: <EventTypes width="110px" height="27px" />,
}

const CalendarSlotsStory = () => (
  <Stories
    argList={[
      blankNone,
      topPartialSingle,
      bottomPartialSingle,
      fullSingle,
      middleSingle,
      topFullSingle,
      bottomFullSingle,
    ]}
    template={args => <CalendarSlots {...args} />}
  />
)

export default CalendarSlotsStory
