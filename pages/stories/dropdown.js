import Stories from 'components/stories'
import DropDown from 'components/dropdown'
import stl from './Stories.module.scss'

const drpdnmenu = {
  variant: 'drpDwn',
  label: 'Dropdown',
  left: '50%',
  top: '50%',
}

const DropDownStory = () => {
  return (
    <Stories argList={[drpdnmenu]} template={args => <DropDown {...args} />} />
  )
}

export default DropDownStory
