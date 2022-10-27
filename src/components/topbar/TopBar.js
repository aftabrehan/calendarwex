import stl from './TopBar.module.scss'

import SettingsIcon from 'assets/settings.svg'
import NotificationIcon from 'assets/notification.svg'
import AccountIcon from 'assets/account.svg'
import SampleLogo from 'assets/sample-logo.svg'

import AccMiniMenu from 'components/accMiniMenu'
import { useState } from 'react'

const TopBar = () => {
  const [value, setValue] = useState(false)

  if (typeof window !== 'undefined') {
    if (value === true) {
      document.getElementById('accMenu').style.display = 'flex'
    } else {
      document.getElementById('accMenu').style.display = 'none'
    }
  }

  return (
    <div className={stl.topBar}>
      <div className={stl.leftSection}>
        <SampleLogo className={stl.logo} />
        <span>CalendarWex</span>
      </div>
      <div className={stl.rightSection}>
        <button className={stl.settingsButton}>
          <SettingsIcon />
        </button>
        <button className={stl.notificationButton}>
          <NotificationIcon />
        </button>
        <button
          className={stl.accountButton}
          onClick={() => {
            if (value === false) {
              setValue(true)
            } else {
              setValue(false)
            }
          }}
        >
          <AccountIcon />
        </button>
        <AccMiniMenu id="accMenu" />
      </div>
    </div>
  )
}

export default TopBar
