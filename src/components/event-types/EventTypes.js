import clsx from 'clsx'

import stl from './EventTypes.module.scss'
import BellIcon from '../../assets/bell.svg'

const EventTypes = ({
  eventType,
  variant,
  icon,
  Cls,
  customClass,
  width,
  height,
  padding,
  background,
  event,
  eventNameClr,
  eventTimeClr,
  eventDescClr,
  borderRadius,
}) => {
  return (
    <div
      className={clsx(stl[`${eventType}`], Cls)}
      style={{ background, borderRadius }}
    >
      <div
        className={clsx(stl.defaultHorizontal, customClass)}
        style={{ width, height, padding }}
      >
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
