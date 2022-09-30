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
    <div arg={arg} className={stl.sidebar}>
      <div className={stl.monthHeader}>
        <div className={stl.monthName}>{monthName}</div>
      </div>
      <div>{monthData}</div>
      <div className={stl.upcomingEvents}>
        {upcomingEvents.map((events, i) => (
          <div>
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
                      <Button variant="fill" icon={<AddIcon />} />
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
