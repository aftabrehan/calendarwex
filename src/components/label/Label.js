import clsx from 'clsx'

import stl from './Label.module.scss'

const Label = ({
  args,
  variant,
  icon,
  text,
  id,
  width,
  height,
  customClass,
  conCustomClass,
}) => {
  return (
    <div arg={args} className={clsx(stl[`${variant}`], customClass)}>
      <div className={clsx(stl.text, conCustomClass)}>
        {icon}
        {text}
      </div>
    </div>
  )
}

export default Label
