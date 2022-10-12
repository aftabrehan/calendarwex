import Stories from 'components/stories'
import Layout from 'components/layout'

const layout = {
  arg: 'layout',
}

const LayoutStory = () => (
  <Stories argList={[layout]} template={args => <Layout {...args} />} />
)

export default LayoutStory
