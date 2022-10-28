import clsx from 'clsx'

import stl from './TopBar.module.scss'

import SettingsIcon from 'assets/settings.svg'
import NotificationIcon from 'assets/notification.svg'
import AccountIcon from 'assets/account.svg'
import SampleLogo from 'assets/sample-logo.svg'

import AccMiniMenu from 'components/accMiniMenu'
import { useState } from 'react'

const TopBar = ({ logout, accBtnId, customClassAcc }) => {
  const [value, setValue] = useState(false)

  if (typeof window !== null) {
    if (value === false) {
      document.getElementById('accMenu').style.display = 'none'
    } else {
      document.getElementById('accMenu').style.display = 'block'
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
        <AccMiniMenu
          logoutHandler={logout}
          id={accBtnId}
          customClass={clsx(customClassAcc || stl.menu)}
        />
      </div>
    </div>
  )
}

export default TopBar
