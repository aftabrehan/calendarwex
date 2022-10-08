import Stories from 'components/stories'
import DateMonth from 'components/date-month'

const dateMonth = {
  arg: 'Date-Month',
  content: '01',
}

const DateMonthStory = () => (
  <Stories argList={[dateMonth]} template={args => <DateMonth {...args} />} />
)

export default DateMonthStory
