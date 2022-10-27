import clsx from 'clsx'

import stl from './AccMiniMenu.module.scss'

import AccountIcon from 'assets/account-small.svg'
import LogoutIcon from 'assets/logout-small.svg'

const AccMiniMenu = ({ customClass, id }) => {
  return (
    <div id="accMenu" className={clsx(stl.accMiniMenu, customClass)}>
      <div className={stl.upperSection}>
        <span>Username</span>
        <span>example@gmail.com</span>
      </div>
      <hr />
      <div className={stl.lowerSection}>
        <button>
          <AccountIcon className={stl.accIcon} /> Account
        </button>
        <button>
          <LogoutIcon /> Log out
        </button>
      </div>
    </div>
  )
}

export default AccMiniMenu
