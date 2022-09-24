import Link from 'next/link'

import stl from './HomePage.module.scss'

const Home = () => {
  return (
    <div className={stl.wrapper}>
      <h3>
        Home Page ©copyright calendarar by{' '}
        <Link href="https//:github.com/appwex">@appwex</Link>
      </h3>
      <Link href="/stories">Go to Stories 🚀</Link>
    </div>
  )
}

export default Home
