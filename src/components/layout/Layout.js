import stl from './Layout.module.scss'

import { useState } from 'react'

import Sidebar from 'components/sidebar'
import MiniCalendar from 'components/minicalendar/SmallCalendar'
import Toolbar from 'components/toolbar'
import LabelLeft from 'components/label/LabelLeft'
import StructureColumn from 'components/structure/column'
import StructureGrid from 'components/structure/grid'
import LabelTop from 'components/label'
import CalendarSlots from 'components/calendarslots'
import DateMonth from 'components/date-month'

import BrainIcon from '../../assets/brain.svg'
import CamelIcon from '../../assets/camel.svg'
import CocktailGlassIcon from '../../assets/cocktail-glass.svg'
import HotBeverageIcon from '../../assets/hot-beverage.svg'
import ZombieIcon from '../../assets/zombie.svg'
import PartyPopperIcon from '../../assets/party-popper.svg'
import MassageIcon from '../../assets/women-getting-massage.svg'
import BlankIcon from '../../assets/blank.svg'

const Layout = () => {
  const [data, setData] = useState({
    type: 'dayView',
    hours: <LabelLeft />,
    day: <StructureColumn width="100%" />,
  })
  const [label, setLabel] = useState()

  let days = []

  for (let i = 0; i < 7; i++) {
    days.push(<StructureColumn width="100%" />)
  }

  let month = []

  for (let i = 0; i < 35; i++) {
    month.push(
      <CalendarSlots
        variant="blankNoneMonth"
        type="month"
        date={<DateMonth />}
        event={[]}
        width="100%"
        height="167.5px"
      />
    )
  }

  let months = []

  for (let i = 0; i < 12; i++) {
    months.push(
      <CalendarSlots
        type="year"
        variant="yearMonthView"
        event={[]}
        monthNumber="01"
        monthData={<MiniCalendar />}
        key={months.length}
        customClass={stl.monthDaySlots}
      />
    )
  }

  const typeHandler = props => {
    if (props === 1) {
      setData({
        type: 'dayView',
        hours: <LabelLeft />,
        day: <StructureColumn width="100%" />,
      })
    } else if (props === 2) {
      setLabel(
        <LabelTop
          customClass={stl.labelTop}
          type="row"
          width="100%"
          gap={<BlankIcon />}
          dayHeader={[
            {
              day: 'Mon',
              icon: <BrainIcon />,
            },
            {
              day: 'Tue',
              icon: <CamelIcon />,
            },
            {
              day: 'Wed',
              icon: <CocktailGlassIcon />,
            },
            {
              day: 'Thu',
              icon: <HotBeverageIcon />,
            },
            {
              day: 'Fri',
              icon: <ZombieIcon />,
            },
            {
              day: 'Sat',
              icon: <PartyPopperIcon />,
            },
            {
              day: 'Sun',
              icon: <MassageIcon />,
            },
          ]}
        />
      )
      setData({
        type: 'weekView',
        hours: <LabelLeft />,
        days,
      })
    } else if (props === 3) {
      setLabel(
        <LabelTop
          customClass={stl.labelTop}
          type="row"
          width="100%"
          dayHeader={[
            {
              day: 'Mon',
              icon: <BrainIcon />,
            },
            {
              day: 'Tue',
              icon: <CamelIcon />,
            },
            {
              day: 'Wed',
              icon: <CocktailGlassIcon />,
            },
            {
              day: 'Thu',
              icon: <HotBeverageIcon />,
            },
            {
              day: 'Fri',
              icon: <ZombieIcon />,
            },
            {
              day: 'Sat',
              icon: <PartyPopperIcon />,
            },
            {
              day: 'Sun',
              icon: <MassageIcon />,
            },
          ]}
        />
      )
      setData({
        variant: 'monthView',
        month: month,
      })
    } else if (props === 4) {
      setLabel(
        <LabelTop
          customClass={stl.labelTop}
          type="row"
          width="100%"
          dayHeader={[
            {
              day: 'Mon',
              icon: <BrainIcon />,
            },
            {
              day: 'Tue',
              icon: <CamelIcon />,
            },
            {
              day: 'Wed',
              icon: <CocktailGlassIcon />,
            },
            {
              day: 'Thu',
              icon: <HotBeverageIcon />,
            },
            {
              day: 'Fri',
              icon: <ZombieIcon />,
            },
            {
              day: 'Sat',
              icon: <PartyPopperIcon />,
            },
            {
              day: 'Sun',
              icon: <MassageIcon />,
            },
          ]}
        />
      )
      setData({
        variant: 'yearColumn',
        months: months,
      })
    }
    console.log(data)
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
        <Toolbar handleType={typeHandler} width="100%" />
        {label}
        <div className={stl.container}>
          <StructureGrid
            width="100%"
            type={data.type}
            variant={data.variant}
            hours={data.hours}
            day={data.day}
            days={data.days}
            month={data.month}
            months={data.months}
            customClass={stl.structureGrid}
          />
        </div>
      </div>
    </div>
  )
}

export default Layout
