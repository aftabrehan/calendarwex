import stl from './Sidebar.module.scss'

import AddIcon from '../../assets/addIcon.svg'
import MiniCalendar from 'components/minicalendar/SmallCalendar'

const Sidebar = ({
  arg,
  variant,
  icon,
  monthName,
  monthData,
  upcomingEvents,
}) => {
  return (
    <div arg={arg} className={stl.sidebar}>
      <div className={stl.monthHeader}>
        <div className={stl.monthName}>{monthName}</div>
      </div>
      <div>{monthData}</div>
      <div className={stl.upcomingEvents}>
        {upcomingEvents.map((events, i) => (
          <div key={i} className={stl.content}>
            <div className={stl.eventsHeading}>
              {icon}
              {events.eventHeading}
            </div>
            <div className={stl.upcmngEvtCntnt}>
              {upcomingEvents[i].eventContent.map((eventCntnt, index) => (
                <div key={index} className={stl.eventItem}>
                  <div>{eventCntnt.eventName}</div>
                  <div>
                    {eventCntnt.eventTime || (
                      <AddIcon className={stl.addIcon} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

Sidebar.defaultProps = {
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
