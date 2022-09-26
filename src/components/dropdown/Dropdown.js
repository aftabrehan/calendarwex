import PropTypes from 'prop-types'

import stl from './Dropdown.module.scss'
import Button from 'components/button'
import clsx from 'clsx'

const mouseUpCaptureHandler = () => {
  const btn = document.getElementById('drpBtn')
  btn.style.display = 'flex'
  const dropDown = document.getElementById('dropMenu')
  dropDown.style.height = '0'
  dropDown.style.zIndex = '-1'
}

const bntOnClickHandler = () => {
  const btn = document.getElementById('drpBtn')
  btn.style.display = 'none'
  const dropDown = document.getElementById('dropMenu')
  dropDown.style.zIndex = '1'
  dropDown.style.height = height
}

const DropDown = ({
  id,
  icon,
  endIcon,
  children,
  onClick,
  liOnClick,
  bntOnClick,
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
    <div className={stl.wrapper}>
      <Button
        id="drpBtn"
        variant="bordered"
        label={name}
        icon={icon}
        onClick={bntOnClick}
      />
      <div>
        <ul
          id="dropMenu"
          className={clsx(stl[`${variant}`], customClass)}
          style={{ top, left }}
          onClick={onClick}
        >
          {drplist.map((i, index) => (
            <li
              value={i}
              key={index}
              onClick={liOnClick}
              onMouseUpCapture={onMouseUpCapture}
            >
              {i || children}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

DropDown.defaultProps = {
  drplist: ['DropdownA'],
  transition: 'all 0.4s',
  onMouseUpCapture: mouseUpCaptureHandler,
  variant: 'drpDwn',
  bntOnClick: bntOnClickHandler,
  height: '55px',
  left: '46.5%',
  top: '45.8%',
  size: 'normal',
  disabled: false,
}

Button.propTypes = {
  id: PropTypes.string,
  drplist: PropTypes.array,
  icon: PropTypes.node,
  endIcon: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  liOnClick: PropTypes.func,
  onMouseUpCapture: PropTypes.func,
  variant: PropTypes.any,
  btnType: PropTypes.any,
  size: PropTypes.any,
  type: PropTypes.any,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  customClass: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
}

export default DropDown
