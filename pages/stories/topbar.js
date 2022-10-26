import Stories from 'components/stories'

import TopBar from 'components/topbar'

const topbar = {
  arg: 'TopBar',
}

const TopBarStory = () => (
  <Stories argList={[topbar]} template={args => <TopBar {...args} />} />
)

export default TopBarStory
