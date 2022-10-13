import clsx from 'clsx'

import DropDown from 'components/dropdown'
import Button from 'components/button'
import stl from './Toolbar.module.scss'
import Search from 'components/search'

import OptIcon from '../../assets/optIcon.svg'
import DropDownIcon from '../../assets/drpdwnIcon.svg'
import AddIcon from '../../assets/addIcon.svg'
import { useState } from 'react'

const Toolbar = ({
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

  const valueHandler = props => {
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

  return (
    <div className={clsx(stl.toolbar, customClass)} style={{ width, height }}>
      <div className={stl.right}>
        <Button
          customClass={clsx(stl.openSidebar)}
          icon={<OptIcon />}
          variant="transparent"
          style={{ flex: 'none', grow: '0', order: '0' }}
        ></Button>
        <span className={stl.label}>{label || title}</span>
        <DropDown
          handleValue={valueHandler}
          drplist={['Day', 'Week', 'Month', 'Year']}
          name={name || drpLabel}
          height="250px"
          width="130px"
          variant="Dropdown"
          customClass={clsx(stl.newDrop)}
          icon={<DropDownIcon />}
        />
      </div>
      <div className={stl.left}>
        <Search />
        <Button variant="fill" icon={<AddIcon />} label="Add Event" />
      </div>
    </div>
  )
}

export default Toolbar

Toolbar.defaultProps = {
  arg: 'Day',
  // label: '01 January 2022',
  // name: 'Day',
}
