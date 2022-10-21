import clsx from 'clsx'

import stl from './EventTypes.module.scss'

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
      style={{ background, borderRadius, width, height }}
    >
      <div className={clsx(stl.defaultHorizontal, customClass)}>
        <div className={stl.eventName} style={{ color: eventNameClr }}>
          {icon}
          {event?.eventName}
        </div>
        <div className={stl.eventTime} style={{ color: eventTimeClr }}>
          {event?.eventTime}
        </div>
      </div>
      <div className={stl.eventDesc} style={{ color: eventDescClr }}>
        {event?.eventDesc}
      </div>
    </div>
  )
}

export default EventTypes
