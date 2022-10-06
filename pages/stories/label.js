import Stories from 'components/stories'
import Label from 'components/label/Label'

import WaveIcon from '../../src/assets/waving-hand.svg'

const labelTimeSide = {
  arg: 'labelTimeSide',
  variant: 'labelTimeSide',
  text: '00:00',
}

const labelTimeSideTop = {
  arg: 'labelTimeSideTop',
  variant: 'labelTimeSideTop',
  text: '00:00',
}

const labelDaySide = {
  arg: 'labelDaySide',
  variant: 'labelDaySide',
  text: 'Day',
}

const labelDayTop = {
  arg: 'labelDayTop',
  variant: 'labelDayTop',
  icon: <WaveIcon />,
  text: 'Day',
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
