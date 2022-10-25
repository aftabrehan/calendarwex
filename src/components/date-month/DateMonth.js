import clsx from 'clsx'

import stl from './DateMonth.module.scss'

const DateMonth = ({ style, content, customClass }) => {
  return (
    <div className={clsx(stl.dateMonth, customClass)}>
      <div style={style} className={stl.date}>
        <span>{content}</span>
      </div>
    </div>
  )
}

export default DateMonth

DateMonth.defaultProps = {
  arg: 'Date-Month',
  content: '01',
}
