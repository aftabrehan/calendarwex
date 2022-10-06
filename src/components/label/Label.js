import clsx from 'clsx'

import stl from './Label.module.scss'

const Label = ({
  args,
  type,
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
    <div
      arg={args}
      style={{ width, height }}
      className={clsx(stl[`${type}`], customClass)}
    >
      <div className={clsx(stl.text, conCustomClass)}>
        {icon}
        {text}
      </div>
    </div>
  )
}

export default Label

Label.defaultProps = {
  arg: 'labelTimeSideTop',
  variant: 'labelTimeSideTop',
  text: '00:00',
}
