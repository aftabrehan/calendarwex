import Stories from 'components/stories'
import Button from 'components/button'

import BtnIcon from 'assets/btnIcon.svg'

const fill = {
  arg: 'Fill',
  variant: 'fill',
  label: 'Button',
  icon: <BtnIcon />,
}
const bordered = {
  arg: 'Bordered',
  variant: 'bordered',
  label: 'Button',
  icon: <BtnIcon />,
}
const transparent = {
  arg: 'Transparent',
  variant: 'transparent',
  label: 'Button',
  icon: <BtnIcon />,
}

const ButtonStory = () => (
  <Stories
    argList={[fill, bordered, transparent]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory
