import Stories from 'components/stories'
import DropDown from 'components/dropdown'

const drpdnmenu = {
  arg: 'Dropdown',
  variant: 'Dropdown',
  drplist: ['Day', 'Week', 'Month', 'Year'],
  top: '-1.1rem',
  left: '50%',
}

const DropDownStory = () => {
  return (
    <Stories argList={[drpdnmenu]} template={args => <DropDown {...args} />} />
  )
}

export default DropDownStory
