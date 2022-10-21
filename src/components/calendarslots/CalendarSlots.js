import clsx from 'clsx'
import EventTypes from 'components/event-types'

import stl from './CalendarSlots.module.scss'

const CalendarSlots = ({
  id,
  type,
  event,
  variant,
  date,
  toggle,
  monthNumber,
  style,
  monthData,
  customClass,
}) => {
  return (
    <div
      id={id}
      className={clsx(stl[`${type}`], stl[`${variant}`], customClass)}
      style={style}
    >
      <div>{date || monthNumber}</div>
      {event.map((item, i) => (
        <div key={i} className={stl.event}>
          <EventTypes {...item} />
        </div>
      ))}
      {toggle || monthData}
    </div>
  )
}

export default CalendarSlots
