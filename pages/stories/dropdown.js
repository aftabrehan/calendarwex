import Stories from 'components/stories'
import DropDown from 'components/dropdown'

const drpdnmenu = {
  arg: 'Dropdown',
  variant: 'Dropdown',
  drplist: ['Day', 'Week', 'Month', 'Year'],
  height: '250px',
  left: '46.5%',
  top: '45.8%',
}

const DropDownStory = () => {
  return (
    <Stories argList={[drpdnmenu]} template={args => <DropDown {...args} />} />
  )
}

export default DropDownStory
