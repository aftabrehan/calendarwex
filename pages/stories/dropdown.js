import Stories from 'components/stories'
import DropDown from 'components/dropdown'

const drpdnmenu = {
  arg: 'Dropdown',
  variant: 'Dropdown',
  drplist: ['Day', 'Week', 'Month', 'Year'],
  height: '250px',
  width: '130px',
  left: '50%',
  top: '-1.2rem',
}

const DropDownStory = () => {
  return (
    <Stories argList={[drpdnmenu]} template={args => <DropDown {...args} />} />
  )
}

export default DropDownStory
