import Stories from 'components/stories'
import Button from 'components/button'

const primary = { arg: 'Fill', label: 'Fill' }
const secondary = { arg: 'Bordered', label: 'Bordered', variant: 'bordered' }

const ButtonStory = () => (
  <Stories
    argList={[primary, secondary]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory

// <Button  />
