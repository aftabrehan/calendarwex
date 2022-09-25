import stl from './Dropdown.module.scss'
import Button from 'components/button'

const DropDown = ({
  label,
  id,
  icon,
  endIcon,
  children,
  onClick,
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
}) => {
  return (
    <div className={stl.wrapper}>
      <div>
        <Button variant="fill" label="DropDown" />
      </div>
      <div>
        <ul id="dropMenu" className={clsx(stl[`${variant}`], customClass)}>
          <li onClick={onClick}>
            {icon}
            {label || children}
            {endIcon}
          </li>
          <li
            onClick={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Week
          </li>
          <li
            onClick={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Month
          </li>
          <li
            onMouseUpCapture={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Year
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DropDown
