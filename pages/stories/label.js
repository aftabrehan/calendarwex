import Stories from 'components/stories'
import Label from 'components/label/Label'

import WaveIcon from '../../src/assets/waving-hand.svg'

const labelTimeSide = {
  arg: 'labelTimeSide',
  type: 'labelTimeSide',
  content: '00:00',
}

const labelTimeSideTop = {
  arg: 'labelTimeSideTop',
  type: 'labelTimeSideTop',
  content: '00:00',
}

const labelDaySide = {
  arg: 'labelDaySide',
  type: 'labelDaySide',
  content: 'Day',
}

const labelDayTop = {
  arg: 'labelDayTop',
  type: 'labelDayTop',
  icon: <WaveIcon />,
  content: 'Day',
}

const LabelStory = () => {
  return (
    <Stories
      argList={[labelTimeSide, labelTimeSideTop, labelDaySide, labelDayTop]}
      template={args => <Label {...args} />}
    />
  )
}

export default LabelStory
