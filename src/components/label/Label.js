import clsx from 'clsx'

import stl from './Label.module.scss'

const Label = ({
  args,
  type,
  variant,
  icon,
  content,
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
      <div className={clsx(stl.content, conCustomClass)}>
        {icon}
        {content}
      </div>
    </div>
  )
}

export default Label

Label.defaultProps = {
  arg: 'labelTimeSideTop',
  type: 'labelTimeSideTop',
  content: '00:00',
}
