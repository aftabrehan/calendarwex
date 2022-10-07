import Stories from 'components/stories'
import DropDown from 'components/dropdown'

const drpdnmenu = {
  arg: 'Dropdown',
  variant: 'Dropdown',
  drplist: ['Day', 'Week', 'Month', 'Year'],
  height: '250px',
  width: '130px',
  top: '-1rem',
}

const DropDownStory = () => (
  <Stories argList={[drpdnmenu]} template={args => <DropDown {...args} />} />
)

export default DropDownStory
