import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Dropdown.module.scss'
import Button from 'components/button'

const mouseUpCaptureHandler = () => {
  const btn = document.getElementById('drpBtn')
  btn.style.opacity = '1'
  const dropDown = document.getElementById('dropMenu')
  dropDown.style.height = '0'
  dropDown.style.width = '0'
  dropDown.style.padding = '0'
  dropDown.style.opacity = '0'
  dropDown.style.zIndex = '-1'
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
  style,
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
  const bntOnClickHandler = () => {
    const btn = document.getElementById('drpBtn')
    btn.style.opacity = '0'
    const dropDown = document.getElementById('dropMenu')
    dropDown.style.zIndex = '1'
    dropDown.style.opacity = '1'
    dropDown.style.width = '130px'
    dropDown.style.padding = '4px 8px'
    dropDown.style.height = '250px'
  }
  return (
    <div className={stl.drpdncontainer}>
      <Button
        id="drpBtn"
        style={style}
        variant="bordered"
        customClass={clsx(stl.new)}
        label={name}
        icon={icon}
        onClick={bntOnClick || bntOnClickHandler}
      />
      <ul
        id="dropMenu"
        className={clsx(stl[`${variant}`], customClass)}
        style={{ top, left, bottom, right, width, height }}
        onClick={onClick}
        height={height}
      >
        {drplist.map((i, index) => (
          <li
            value={index + 1}
            key={index}
            onClick={liOnClick}
            onMouseUpCapture={onMouseUpCapture}
          >
            {i || children}
          </li>
        ))}
      </ul>
    </div>
  )
}

DropDown.defaultProps = {
  drplist: ['DropdownA'],
  transition: 'all 0.4s',
  onMouseUpCapture: mouseUpCaptureHandler,
  variant: 'drpDwn',
  onClick: () => {},
  top: '-1rem',
  left: '50%',
  name: 'DropDown',
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
