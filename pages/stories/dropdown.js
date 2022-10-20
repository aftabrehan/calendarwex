import Stories from 'components/stories'
import DropDown from 'components/dropdown'

const drpdnmenu = {
  arg: 'Dropdown',
  variant: 'Dropdown',
  drplist: ['Day', 'Week', 'Month', 'Year'],
  height: '0',
  width: '0',
  top: '-1rem',
  styleBtn: { backgroundColor: 'tranparent' },
}

const DropDownStory = () => (
  <Stories argList={[drpdnmenu]} template={args => <DropDown {...args} />} />
)

export default DropDownStory
