import Button from 'components/button'
import stl from './Sidebar.module.scss'

import AddIcon from '../../assets/addIcon.svg'

const Sidebar = ({
  arg,
  variant,
  icon,
  monthName,
  monthData,
  upcomingEvents,
}) => {
  return (
    <div className={stl.sidebar}>
      <div className={stl.monthHeader}>
        <div className={stl.monthName}>{monthName}</div>
      </div>
      <div>{monthData}</div>
      {upcomingEvents.map((events, i) => (
        <div key={i} className={stl.upcomingEvents}>
          <div className={stl.eventsHeading}>
            {events.eventHeading}
            {upcomingEvents[i].eventContent.map((eventCntnt, index) => (
              <div key={index} className={stl.upcmngEvtCntnt}>
                <div className={stl.eventName}>{eventCntnt.eventName}</div>
                <div className={stl.eventName}>
                  {eventCntnt.eventTime || (
                    <Button variant="fill" icon={<AddIcon />} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar

// <div className={stl.upcomingEvents}>
// <div className={stl.eventsHeading}>Upcoming Events</div>
// <div className={stl.upcmngEvtCntnt}>
//   <div className={stl.eventName}>No Upcoming Events</div>
// </div>
// </div>
