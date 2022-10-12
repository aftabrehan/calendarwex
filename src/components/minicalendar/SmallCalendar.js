import clsx from 'clsx'

import stl from './SmallCalendar.module.scss'
import React from 'react'

import DateMonth from 'components/date-month'

const MiniCalendar = ({ arg, Days, dates, customClass, variant }) => {
  return (
    <div className={clsx(stl.smallCalendar, customClass)}>
      <div className={stl.smallCalendarDays}>
        {Days.map((dy, i) => (
          <DateMonth key={i} content={dy} />
        ))}
      </div>
    </div>
  )
}

export default MiniCalendar

let Days = ['m', 't', 'w', 't', 'f', 's', 's']

for (let i = 1; i < 36; i++) {
  Days.push(<DateMonth content={(i > 31 && '-') || i} />)
}

MiniCalendar.defaultProps = {
  arg: 'MiniCalendar',
  Days,
}
