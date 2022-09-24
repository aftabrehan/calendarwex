import Stories from 'components/stories'
import Button from 'components/button'

const primary = { arg: 'Primary', label: 'Primary' }
const secondary = { arg: 'Secondary', label: 'Secondary', variant: 'secondary' }

const ButtonStory = () => (
  <Stories
    argList={[primary, secondary]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory
