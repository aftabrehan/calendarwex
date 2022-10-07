import clsx from 'clsx'

import DropDown from 'components/dropdown'
import Button from 'components/button'
import stl from './Toolbar.module.scss'
import Search from 'components/search'

import OptIcon from '../../assets/optIcon.svg'
import DropDownIcon from '../../assets/drpdwnIcon.svg'
import AddIcon from '../../assets/addIcon.svg'

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
  return (
    <div className={clsx(stl.toolbar, customClass)}>
      <div className={stl.right}>
        <Button
          customClass={clsx(stl.openSidebar)}
          icon={<OptIcon />}
          variant="transparent"
          style={{ flex: 'none', grow: '0', order: '0' }}
        ></Button>
        <span className={stl.label}>{label}</span>
        <DropDown
          drplist={['Day', 'Week', 'Month', 'Year']}
          name={name}
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
  label: '01 January 2022',
  name: 'Day',
}
