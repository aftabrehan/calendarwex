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

  const onClickHander = () => {
    if (!value) {
      document.getElementById('accMenu').style.visibility = 'visible'
      document.getElementById('accMenu').style.display = 'block'
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
            if (!value) {
              setValue(true)
            } else {
              setValue(false)
            }
            onClickHander()
          }}
        >
          <AccountIcon />
        </button>
        <AccMiniMenu
          logoutHandler={logout}
          id={accBtnId}
          onClick={onClickHander}
          customClass={clsx(customClassAcc || stl.menu)}
        />
      </div>
    </div>
  )
}

export default TopBar
