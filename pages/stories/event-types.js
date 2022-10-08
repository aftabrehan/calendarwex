import Stories from 'components/stories'
import EventTypes from 'components/event-types'

import BellIcon from '../../src/assets/bell.svg'
import EllipseIcon from '../../src/assets/ellipse-1.svg'

const defaultHorizontal = {
  arg: 'defaultHorizontal',
  eventType: 'eventDefHr',
  icon: <BellIcon />,
  event: {
    eventName: 'Event Name',
    eventTime: '08:00',
  },
}

const defaultDescHorizontal = {
  arg: 'defaultDescHorizontal',
  eventType: 'eventDescHr',
  icon: <BellIcon />,
  event: {
    eventName: 'Event Name',
    eventTime: '08:00',
    eventDesc: 'Description',
  },
}

const smallHorizontal = {
  arg: 'smallHorizontal',
  eventType: 'eventSmallHr',
  icon: <EllipseIcon />,
  event: {
    eventName: 'Event Name',
    eventTime: '08:00',
  },
}

const EventTypesStory = () => (
  <Stories
    argList={[defaultHorizontal, defaultDescHorizontal, smallHorizontal]}
    template={args => <EventTypes {...args} />}
  />
)

export default EventTypesStory
