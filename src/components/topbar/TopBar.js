import { useState, useRef } from 'react'
import clsx from 'clsx'

import AccMiniMenu from 'components/accMiniMenu'
import { useOnClickOutside } from 'lib/hooks'

import SettingsIcon from 'assets/settings.svg'
import NotificationIcon from 'assets/notification.svg'
import AccountIcon from 'assets/account.svg'
import SampleLogo from 'assets/sample-logo.svg'

import stl from './TopBar.module.scss'

const TopBar = ({ logout, accBtnId, customClassAcc }) => {
  const [value, setValue] = useState(false)

  const ref = useRef()

  const onClickHander = () => {
    document.getElementById('accMenu').style.visibility = 'visible'
    document.getElementById('accMenu').style.display = 'block'
  }

  const hideMiniMenu = () => {
    document.getElementById('accMenu').style.display = 'none'
  }

  useOnClickOutside(hideMiniMenu, ref)
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
          reference={ref}
          onClick={logout}
          id={accBtnId}
          customClass={clsx(customClassAcc || stl.menu)}
        />
      </div>
    </div>
  )
}

export default TopBar
