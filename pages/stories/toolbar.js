import Stories from 'components/stories'
import Toolbar from 'components/toolbar'

const toolbarDay = {
  arg: 'Day',
}

const toolbarWeek = {
  arg: 'Week',
}

const toolbarMonth = {
  arg: 'Month',
}

const toolbarYear = {
  arg: 'Year',
}

const ToolbarStory = () => (
  <Stories
    argList={[toolbarDay, toolbarWeek, toolbarMonth, toolbarYear]}
    template={args => <Toolbar {...args} />}
  />
)

export default ToolbarStory
