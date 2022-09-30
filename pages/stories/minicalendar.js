import SmallCalendar from 'components/minicalendar'
import Stories from 'components/stories'

const MiniCalendarStory = () => {
  const minicalendar = {
    arg: 'MiniCalendar',
  }

  return (
    <Stories
      argList={[minicalendar]}
      template={args => <SmallCalendar {...args} />}
    />
  )
}

export default MiniCalendarStory
