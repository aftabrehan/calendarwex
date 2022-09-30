import Stories from 'components/stories'
import Sidebar from 'components/sidebar'
import MiniCalendar from 'components/minicalendar/SmallCalendar'

import CalendarIcon from '../../src/assets/calendar.svg'

const sidebarEmpty = {
  arg: 'SidebarEmpty',
  variant: 'emptySidebar',
  monthName: 'January',
  monthData: <MiniCalendar />,
  upcomingEvents: [
    {
      eventHeading: 'Upcoming Events',
      eventContent: [
        {
          eventName: 'No Upcoming Events',
        },
      ],
    },
  ],
}

const sidebarDefault = {
  arg: 'SidebarDefault',
  variant: 'defaultSidebar',
  monthName: 'January',
  monthData: <MiniCalendar />,
  upcomingEvents: [
    {
      eventHeading: 'Today',
      eventContent: [
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      eventHeading: 'Today',
      eventContent: [
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
      ],
    },
    {
      eventHeading: 'Today',
      eventContent: [
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
        {
          eventName: 'Daily Standup',
          eventTime: new Date().toLocaleTimeString(),
        },
      ],
    },
  ],
  icon: <CalendarIcon />,
}

const SidebarStory = () => {
  return (
    <Stories
      argList={[sidebarEmpty, sidebarDefault]}
      template={args => <Sidebar {...args} />}
    />
  )
}

export default SidebarStory
