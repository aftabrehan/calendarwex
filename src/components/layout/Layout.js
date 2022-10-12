import stl from './Layout.module.scss'

import Sidebar from 'components/sidebar'
import MiniCalendar from 'components/minicalendar/SmallCalendar'
import Toolbar from 'components/toolbar'
import LabelLeft from 'components/label/LabelLeft'
import StructureColumn from 'components/structure/column'
import StructureGrid from 'components/structure/grid'

const Layout = () => {
  let days = []

  for (let i = 0; i < 7; i++) {
    days.push(<StructureColumn />)
  }

  return (
    <div className={stl.layout}>
      <Sidebar
        customClass={stl.sideBar}
        monthName="January"
        monthData={<MiniCalendar customClass={stl.miniCalendar} />}
        upcomingEvents={[
          {
            eventHeading: 'Today',
            eventContent: [
              {
                eventName: 'Daily Standup',
                eventTime: new Date().toLocaleTimeString(),
              },
              {
                eventName: 'Daily Standup',
                eventTime: new Date().toLocaleTimeString(),
              },
              {
                eventName: 'Daily Standup',
                eventTime: new Date().toLocaleTimeString(),
              },
              {
                eventName: 'Daily Standup',
                eventTime: new Date().toLocaleTimeString(),
              },
              {
                eventName: 'Daily Standup',
                eventTime: new Date().toLocaleTimeString(),
              },
              {
                eventName: 'Daily Standup',
                eventTime: new Date().toLocaleTimeString(),
              },
            ],
          },
        ]}
      />
      <div className={stl.main}>
        <Toolbar width="100%" />
        <div className={stl.container}>
          <StructureGrid
            type="dayView"
            hours={<LabelLeft />}
            day={<StructureColumn slotWidth="100%" />}
          />
        </div>
      </div>
    </div>
  )
}

export default Layout
