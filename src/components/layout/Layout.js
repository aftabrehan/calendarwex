import stl from './Layout.module.scss'

import Sidebar from 'components/sidebar'
import MiniCalendar from 'components/minicalendar/SmallCalendar'
import Toolbar from 'components/toolbar'
import LabelLeft from 'components/label/LabelLeft'
import StructureColumn from 'components/structure/column'
import StructureGrid from 'components/structure/grid'
import { useState } from 'react'
import LabelTop from 'components/label'

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
    day: <StructureColumn slotWidth="100%" />,
  })
  const [label, setLabel] = useState(
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

  let days = []

  for (let i = 0; i < 7; i++) {
    days.push(<StructureColumn />)
  }

  const typeHandler = props => {
    if (props === 1) {
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
      setData = {
        type: 'dayView',
        hours: <LabelLeft />,
        day: <StructureColumn slotWidth="100%" />,
      }
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
      setData = {
        type: 'weekView',
        hours: <LabelLeft />,
        days: days,
      }
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
      setData = {
        type: 'dayView',
        hours: <LabelLeft />,
        day: <StructureColumn slotWidth="100%" />,
      }
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
      setData = {
        type: 'dayView',
        hours: <LabelLeft />,
        day: <StructureColumn slotWidth="100%" />,
      }
    }
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
          <StructureGrid type={data.type} hours={data.hours} day={data.day} />
        </div>
      </div>
    </div>
  )
}

export default Layout
