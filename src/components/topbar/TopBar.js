import stl from './TopBar.module.scss'

import SettingsIcon from 'assets/settings.svg'
import NotificationIcon from 'assets/notification.svg'
import AccountIcon from 'assets/account.svg'
import SampleLogo from 'assets/sample-logo.svg'

const TopBar = () => {
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
        <button className={stl.accountButton}>
          <AccountIcon />
        </button>
      </div>
    </div>
  )
}

export default TopBar
