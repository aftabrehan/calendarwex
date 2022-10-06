import Stories from 'components/stories'
import Toolbar from 'components/toolbar'

const toolbarDay = {
  arg: 'Day',
  label: '01 January 2022',
  name: 'Day',
}

const toolbarWeek = {
  arg: 'Week',
  label: '01-07 January 2022',
  name: 'Week',
}

const toolbarMonth = {
  arg: 'Month',
  label: 'January 2022',
  name: 'Month',
}

const toolbarYear = {
  arg: 'Year',
  label: '2022',
  name: 'Year',
}

const ToolbarStory = () => {
  return (
    <Stories
      argList={[toolbarDay, toolbarWeek, toolbarMonth, toolbarYear]}
      template={args => <Toolbar {...args} />}
    />
  )
}

export default ToolbarStory
