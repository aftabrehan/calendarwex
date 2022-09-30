import Stories from 'components/stories'
import Sidebar from 'components/sidebar'
import MiniCalendar from 'components/minicalendar/SmallCalendar'

import CelebIcon from '../../src/assets/celebration.svg'
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
          // eventTime: '08:00',
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
  eventDay: 'Today',
  eventName: [{ eventName: 'Daily Standup' }],
  eventTime: new Date().toTimeString(),
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
