import SmallCalendar from 'components/minicalendar'
import stl from './Sidebar.module.scss'
import Celebration from '../../assets/celebration.svg'

const Sidebar = ({ monthName, monthData, upcomingEvents }) => {
  return (
    <div className={stl.sidebar}>
      <div className={stl.monthHeader}>
        <div className={stl.monthName}>January</div>
      </div>
      <SmallCalendar />
      <div className={stl.upcomingEvents}>
        <div className={stl.eventsHeading}>Upcoming Events</div>
        <div className={stl.upcmngEvtCntnt}>
          <Celebration className={stl.celebIcon} />
          <div className={stl.emptyEvent}>No Upcoming Events</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
