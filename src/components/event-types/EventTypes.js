import clsx from 'clsx'

import stl from './EventTypes.module.scss'
import BellIcon from '../../assets/bell.svg'

const EventTypes = ({
  eventType,
  variant,
  icon,
  customClass,
  width,
  height,
  backgroundClr,
  event,
  eventNameClr,
  eventTimeClr,
  eventDescClr,
  borderRadius,
}) => {
  return (
    <div
      className={stl[`${eventType}`]}
      style={{ background: backgroundClr, width, height, borderRadius }}
    >
      <div className={clsx(stl.defaultHorizontal, customClass)}>
        <div className={stl.eventName} style={{ color: eventNameClr }}>
          {icon}
          {event.eventName}
        </div>
        <div className={stl.eventTime} style={{ color: eventTimeClr }}>
          {event.eventTime}
        </div>
      </div>
      <div className={stl.eventDesc} style={{ color: eventDescClr }}>
        {event.eventDesc}
      </div>
    </div>
  )
}

export default EventTypes

EventTypes.defaultProps = {
  arg: 'defaultHorizontal',
  eventType: 'eventDefHr',
  icon: <BellIcon />,
  event: {
    eventName: 'Event Name',
    eventTime: '08:00',
  },
}
