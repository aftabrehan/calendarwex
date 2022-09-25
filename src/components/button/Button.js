import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({
  label,
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
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{ width, height }}
      className={clsx(
        stl.btn,
        stl[`${variant}Btn`],
        stl[`${size}Btn`],
        customClass
      )}
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
  size: PropTypes.oneOf(['normal', 'small', 'large', 'xLarge']),
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  customClass: PropTypes.string,
}

export default Button
