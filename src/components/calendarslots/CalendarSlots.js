import clsx from 'clsx'

import stl from './Calendar.module.scss'

const CalendarSlots = ({ type, event, variant, customClass }) => {
  return (
    <>
      <div className={clsx(stl[`${type}`], stl[`${variant}`], customClass)}>
        <div>{event}</div>
      </div>
    </>
  )
}

export default CalendarSlots
