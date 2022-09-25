import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({
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
  width,
  height,
  customClass,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
      className={clsx(stl[`${variant}Btn`], customClass)}
    >
      {label || children}
      {icon}
    </button>
  )
}

Button.defaultProps = {
  label: '',
  onClick: () => console.log('Button Clicked!'),
  variant: 'fill',
  size: 'normal',
  disabled: false,
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
  type: PropTypes.oneOf(['submit']),
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  customClass: PropTypes.string,
}

export default Button
