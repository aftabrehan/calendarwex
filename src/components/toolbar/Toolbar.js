import clsx from 'clsx'
import { useState } from 'react'

import DropDown from 'components/dropdown'
import Button from 'components/button'
import stl from './Toolbar.module.scss'
import Search from 'components/search'

import OptIcon from 'assets/optIcon.svg'
import DropDownIcon from 'assets/drpdwnIcon.svg'
import AddIcon from 'assets/addIcon.svg'
import LogoutIcon from 'assets/logout.svg'
import CloseIcon from 'assets/close.svg'

const Toolbar = ({
  dropDownHandler,
  sideBarHandler,
  sidebarBtnId,
  toggleBtnClass,
  logout,
  argList,
  id,
  icon,
  endIcon,
  children,
  onClick,
  liOnClick,
  bntOnClick,
  label,
  variant,
  btnType,
  size,
  type,
  disabled,
  top,
  bottom,
  right,
  left,
  width,
  height,
  customClass,
  name,
  drplist,
  onMouseUpCapture,
}) => {
  const [title, setTitle] = useState('01 January 2022')
  const [drpLabel, setdDrpLabel] = useState('Day')
  const [inputValue, setInputValue] = useState('')

  const valueHandler = props => {
    dropDownHandler(props)

    if (
      (props === 1 && setTitle('01 January 2022')) ||
      (props === 2 && setTitle('01-07 January 2022')) ||
      (props === 3 && setTitle('January 2022')) ||
      (props === 4 && setTitle('2022'))
    ) {
    } else if (
      (props === 1 && setdDrpLabel('Day')) ||
      (props === 2 && setdDrpLabel('Week')) ||
      (props === 3 && setdDrpLabel('Month')) ||
      (props === 4 && setdDrpLabel('Year'))
    ) {
    }
  }

  const hideInput = () => {
    document.getElementById('inputToolbar').style.display = 'none'
    document.getElementById('input').value = ''
    document.getElementById('toolbarLeft').style.display = 'flex'
    document.getElementById('toolbarRight').style.display = 'flex'
  }

  const showInput = () => {
    document.getElementById('inputToolbar').style.display = 'flex'
    document.getElementById('toolbarLeft').style.display = 'none'
    document.getElementById('toolbarRight').style.display = 'none'
  }

  return (
    <div className={clsx(stl.toolbar, customClass)} style={{ width, height }}>
      <div id="inputToolbar" className={stl.inputToolbar}>
        <input
          id="input"
          className={stl.searchInput}
          type="search"
          value={inputValue}
          placeholder="Search"
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            hideInput()
          }}
        >
          <CloseIcon />
        </button>
      </div>

      <div id="toolbarLeft" className={stl.right}>
        <Button
          id={sidebarBtnId}
          customClass={toggleBtnClass}
          icon={<OptIcon />}
          variant="transparent"
          style={{ flex: 'none', grow: '0', order: '0', zIndex: '1' }}
          onClick={sideBarHandler}
        ></Button>
        <span style={{ zIndex: '1' }} className={stl.label}>
          {label || title}
        </span>
        <DropDown
          style={{ zIndex: '1' }}
          variant="Dropdown"
          liOnClick={valueHandler}
          drplist={['Day', 'Week', 'Month', 'Year']}
          name={name || drpLabel}
          height="0"
          width="0"
          top="-1rem"
          customClass={stl.dropDown}
          customClassBtn={stl.newDrop}
          icon={<DropDownIcon />}
        />
      </div>
      <div id="toolbarRight" className={stl.left}>
        <Search onClick={showInput} />
        <Button
          style={{ zIndex: '1' }}
          variant="fill"
          icon={<AddIcon />}
          label="Add Event"
        />
      </div>
    </div>
  )
}

export default Toolbar

Toolbar.defaultProps = {
  dropDownHandler: () => console.log('Dropdown Option Clicked...'),
}
