import Stories from 'components/stories'
import AccMiniMenu from 'components/accMiniMenu'

const accminimenu = {
  arg: 'Acc-Mini-Menu',
}

const AccMiniMenuStory = () => (
  <Stories
    argList={[accminimenu]}
    template={args => <AccMiniMenu {...args} />}
  />
)

export default AccMiniMenuStory
