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
        stl[`${btnType}Btn`],
        stl[`${size}Btn`],
        customClass
      )}
    >
      {icon}
      {label || children}
      {endIcon}
    </button>
  )
}

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('Button Clicked!'),
  variant: 'fill',
  size: 'normal',
  type: 'submit',
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
  type: PropTypes.oneOf(['submit']),
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  customClass: PropTypes.string,
}

export default Button
