import { signOut } from 'firebase/auth'
import { auth } from '../../../pages/api/firebase-config'

import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({
  label,
  id,
  icon,
  logoutHandler,
  endIcon,
  children,
  onClick,
  variant,
  btnType,
  size,
  type,
  disabled,
  width,
  height,
  customClass,
  style,
}) => {
  const signOutFunction = () => {
    signOut(auth)
    window.localStorage.setItem('user', JSON.stringify(null))
    logoutHandler(1)
  }

  return (
    <button
      className={clsx(stl[`${variant}Btn`], stl.btn, customClass)}
      id={id}
      onClick={() => {
        onClick || signOutFunction()
      }}
      disabled={disabled}
      type={type}
      style={style}
    >
      {label || children}
      {icon}
    </button>
  )
}

Button.defaultProps = {
  label: '',
  variant: 'fill',
  size: 'normal',
  disabled: false,
  onClick: () => console.log('Button clicked'),
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  endIcon: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['fill', 'bordered', 'transparent']),
  btnType: PropTypes.oneOf(['bordered', 'rounded', 'transparent', 'invert']),
  size: PropTypes.oneOf(['normal', 'small', 'large', 'xLarge']),
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  customClass: PropTypes.string,
}

export default Button
