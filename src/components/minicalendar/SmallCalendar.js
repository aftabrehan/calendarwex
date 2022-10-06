import clsx from 'clsx'

import stl from './SmallCalendar.module.scss'
import React from 'react'

const MiniCalendar = ({
  arg,
  Days,
  row1,
  row2,
  row3,
  row4,
  row5,
  customClass,
  variant,
}) => {
  return (
    <div className={clsx(stl.smallCalendar, stl.monthData, customClass)}>
      <div className={stl.smallCalendarContent}>
        <div className={stl.smallCalendarDays}>
          {Days.map((dy, i) => (
            <div key={i}>{dy}</div>
          ))}
        </div>
        <div className={stl.smallCalendarDateWeek}>
          {row1.map((dt, i) => (
            <div key={i} id={i} className={stl.dates}>
              {dt}
            </div>
          ))}
        </div>
        <div className={stl.smallCalendarDateWeek}>
          {row2.map((dt, i) => (
            <div key={i} id={i} className={stl.dates}>
              {dt}
            </div>
          ))}
        </div>
        <div className={stl.smallCalendarDateWeek}>
          {row3.map((dt, i) => (
            <div key={i} id={i} className={stl.dates}>
              {dt}
            </div>
          ))}
        </div>
        <div className={stl.smallCalendarDateWeek}>
          {row4.map((dt, i) => (
            <div key={i} id={i} className={stl.dates}>
              {dt}
            </div>
          ))}
        </div>
        <div className={stl.smallCalendarDateWeek}>
          {row5.map((dt, i) => (
            <div key={i} id={i} className={stl.dates}>
              {dt}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiniCalendar

MiniCalendar.defaultProps = {
  arg: 'MiniCalendar',
  Days: ['m', 't', 'w', 't', 'f', 's', 's'],
  row1: ['0' + 1, '0' + 2, '0' + 3, '0' + 4, '0' + 5, '0' + 6, '0' + 7],
  row2: ['0' + 8, '0' + 9, 10, 11, 12, 13, 14],
  row3: [15, 16, 17, 18, 19, 20, 21],
  row4: [22, 23, 24, 25, 26, 27, 28],
  row5: [29, 30, 31, '0' + 1, '0' + 2, '0' + 3, '0' + 4],
}
