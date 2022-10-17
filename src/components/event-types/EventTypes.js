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
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <div
          className={clsx(stl[`${eventType}`], Cls)}
          style={{ background, borderRadius, width: '100%' }}
        >
          <div
            className={clsx(stl.defaultHorizontal, customClass)}
            style={{ width: '100%', height, padding }}
          >
            <div className={stl.eventName} style={{ color: eventNameClr }}>
              {icon}
              {event.eventName}
            </div>
            <div className={stl.eventTime} style={{ color: eventTimeClr }}>
              {event.eventTime}
            </div>
          </div>
          <div
            className={stl.eventDesc}
            style={{ color: eventDescClr, width: '100%' }}
          >
            {event.eventDesc}
          </div>
        </div>
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
