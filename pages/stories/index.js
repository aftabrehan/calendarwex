import Link from 'next/link'

import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/button">Button</Link>
    <Link href="/stories/dropdown">DropDown</Link>
    <Link href="/stories/toolbar">Toolbar</Link>
    <Link href="/stories/search">Search</Link>
    <Link href="/stories/sidebar">Sidebar</Link>
    <Link href="/stories/minicalendar">MiniCalendar</Link>
    <Link href="/stories/label-top">Label-Top</Link>
    <Link href="/stories/label">Label Types</Link>
    <Link href="/stories/label-left">Label-Left</Link>
    <Link href="/stories/event-types">EventTypes</Link>
    <Link href="/stories/calendarslots">CalendarSlots</Link>
    <Link href="/stories/datemonth">Date-Month</Link>
    <Link href="/stories/structure-column">Structure-Column</Link>
    <Link href="/stories/structure-grid">Structure-Grid</Link>
    <Link href="/stories/layout">Layout</Link>
    <Link href="/stories/testapi">TestApi</Link>
    <Link href="/stories/signup">SignUp</Link>
    <Link href="/stories/signin">SignIn</Link>
    <Link href="/stories/form">Form</Link>
  </div>
)

export default StoriesLinks
