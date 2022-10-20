import Stories from 'components/stories'
import Sidebar from 'components/sidebar'
import MiniCalendar from 'components/minicalendar/SmallCalendar'

import CalendarIcon from 'assets/calendar.svg'

const sidebarEmpty = {
  arg: 'SidebarEmpty',
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

const SidebarStory = () => (
  <Stories
    argList={[sidebarEmpty, sidebarDefault]}
    template={args => <Sidebar {...args} />}
  />
)

export default SidebarStory
