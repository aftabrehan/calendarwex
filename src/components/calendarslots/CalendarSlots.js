import clsx from 'clsx'

import stl from './CalendarSlots.module.scss'

const CalendarSlots = ({
  id,
  type,
  event,
  variant,
  date,
  toggle,
  monthNumber,
  width,
  height,
  style,
  monthData,
  customClass,
}) => {
  return (
    <div
      id={id}
      className={clsx(stl[`${type}`], stl[`${variant}`], customClass)}
      style={style || { height }}
    >
      <div>{date || monthNumber}</div>
      <div>
        {event.map((item, i) => (
          <div className={stl.common} key={i}>
            {item}
          </div>
        ))}
        {toggle || monthData}
      </div>
    </div>
  )
}

export default CalendarSlots
