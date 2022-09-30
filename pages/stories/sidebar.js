import Stories from 'components/stories'
import Sidebar from 'components/sidebar'

const sidebarEmpty = {
  arg: 'SidebarEmpty',
  variant: 'emptySidebar',
}

const sidebarDefault = {
  arg: 'SidebarDefault',
  variant: 'defaultSidebar',
}

const SidebarStory = () => {
  return (
    <Stories
      argList={[sidebarEmpty, sidebarDefault]}
      template={args => <Sidebar {...args} />}
    />
  )
}

export default SidebarStory
