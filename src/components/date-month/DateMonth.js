import clsx from 'clsx'

import stl from './DateMonth.module.scss'

const DateMonth = ({ content, customClass }) => {
  return (
    <div className={clsx(stl.dateMonth, customClass)}>
      <div className={stl.date}>
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
