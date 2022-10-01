import Stories from 'components/stories'
import Label from 'components/label'

import Icon1 from '../../src/assets/brain.svg'
import Icon2 from '../../src/assets/camel.svg'
import Icon3 from '../../src/assets/cocktail-glass.svg'
import Icon4 from '../../src/assets/hot-beverage.svg'
import Icon5 from '../../src/assets/icon.svg'
import Icon6 from '../../src/assets/party-popper.svg'
import Icon7 from '../../src/assets/tree.svg'
import BlankIcon from '../../src/assets/blank.svg'

const label = {
  arg: 'Week',
  variant: 'week',
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  icon: [
    <Icon1 />,
    <Icon2 />,
    <Icon3 />,
    <Icon4 />,
    <Icon5 />,
    <Icon6 />,
    <Icon7 />,
  ],
}

const LabelStory = () => {
  return <Stories argList={[label]} template={args => <Label {...args} />} />
}

export default LabelStory
