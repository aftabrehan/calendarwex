import clsx from 'clsx'

import stl from './AccMiniMenu.module.scss'

import AccountIcon from 'assets/account-small.svg'
import LogoutIcon from 'assets/logout-small.svg'

const AccMiniMenu = ({ logoutHandler, id, customClass }) => {
  return (
    <div id={id || accMenu} className={clsx(stl.accMiniMenu, customClass)}>
      <div className={stl.upperSection}>
        <span>Username</span>
        <span>example@gmail.com</span>
      </div>
      <hr />
      <div className={stl.lowerSection}>
        <button>
          <AccountIcon /> Account
        </button>
        <button
          onClick={() => {
            logoutHandler() || console.log('Button clicked...')
          }}
        >
          <LogoutIcon className={stl.logoutIcon} /> Log out
        </button>
      </div>
    </div>
  )
}

export default AccMiniMenu
