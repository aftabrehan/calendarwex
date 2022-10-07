import SmallCalendar from 'components/minicalendar'
import Stories from 'components/stories'

const MiniCalendarStory = () => {
  const minicalendar = {
    arg: 'MiniCalendar',
    Days: ['m', 't', 'w', 't', 'f', 's', 's'],
    row1: ['0' + 1, '0' + 2, '0' + 3, '0' + 4, '0' + 5, '0' + 6, '0' + 7],
    row2: ['0' + 8, '0' + 9, 10, 11, 12, 13, 14],
    row3: [15, 16, 17, 18, 19, 20, 21],
    row4: [22, 23, 24, 25, 26, 27, 28],
    row5: [29, 30, 31, '0' + 1, '0' + 2, '0' + 3, '0' + 4],
  }

  return (
    <Stories
      argList={[minicalendar]}
      template={args => <SmallCalendar {...args} />}
    />
  )
}

export default MiniCalendarStory
