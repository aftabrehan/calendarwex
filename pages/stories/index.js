import Link from 'next/link'

import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/button">Button</Link>
    <Link href="/stories/toolbar">Toolbar</Link>
  </div>
)

export default StoriesLinks
