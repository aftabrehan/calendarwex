import DateMonth from 'components/date-month'
import SmallCalendar from 'components/minicalendar'
import Stories from 'components/stories'

const MiniCalendarStory = () => {
  let Days = ['m', 't', 'w', 't', 'f', 's', 's']

  for (let i = 1; i < 36; i++) {
    Days.push(<DateMonth content={(i > 31 && '-') || i} />)
  }

  const minicalendar = {
    arg: 'MiniCalendar',
    Days,
  }

  return (
    <Stories
      argList={[minicalendar]}
      template={args => <SmallCalendar {...args} />}
    />
  )
}

export default MiniCalendarStory
