import clsx from 'clsx'

import stl from './Calendar.module.scss'

const CalendarSlots = ({
  type,
  event,
  variant,
  date,
  toggle,
  monthNumber,
  monthData,
  customClass,
}) => {
  return (
    <>
      <div className={clsx(stl[`${type}`], stl[`${variant}`], customClass)}>
        <div>{date || monthNumber}</div>
        <div>
          {event.map((item, i) => (
            <div className={stl.event} key={i}>
              {item}
            </div>
          ))}
          {toggle || monthData}
        </div>
      </div>
    </>
  )
}

export default CalendarSlots
