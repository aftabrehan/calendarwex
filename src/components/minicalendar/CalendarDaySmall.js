import stl from './CalendarDaySmall.module.scss'

const CalendarDaySmall = () => {
  return (
    <div className={stl.calendarDaySmall}>
      <div className={stl.calendarDaySmallContent}>
        <div className={stl.calendarDaySmallDateDefault}>
          <div>01</div>
        </div>
      </div>
      <div className={stl.calendarDaySmallContent}>
        <div className={stl.calendarDaySmallDateHover}>
          <div>01</div>
        </div>
      </div>
      <div className={stl.calendarDaySmallContent}>
        <div className={stl.calendarDaySmallDateSelected}>
          <div>01</div>
        </div>
      </div>
      <div className={stl.calendarDaySmallContent}>
        <div className={stl.calendarDaySmallDayDefault}>
          <div>m</div>
        </div>
      </div>
    </div>
  )
}

export default CalendarDaySmall
