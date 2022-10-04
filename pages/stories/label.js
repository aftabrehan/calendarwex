import Stories from 'components/stories'
import LabelTop from 'components/label'

import Icon1 from '../../src/assets/brain.svg'
import Icon2 from '../../src/assets/camel.svg'
import Icon3 from '../../src/assets/cocktail-glass.svg'
import Icon4 from '../../src/assets/hot-beverage.svg'
import Icon5 from '../../src/assets/zombie.svg'
import Icon6 from '../../src/assets/party-popper.svg'
import Icon7 from '../../src/assets/women-getting-massage.svg'
import BlankIcon from '../../src/assets/blank.svg'

const labelTopWeek = {
  arg: 'Week',
  variant: 'row',
  gap: <BlankIcon />,
  days: [
    {
      day: 'Mon',
      icon: <Icon1 />,
    },
    {
      day: 'Tue',
      icon: <Icon2 />,
    },
    {
      day: 'Wed',
      icon: <Icon3 />,
    },
    {
      day: 'Thu',
      icon: <Icon4 />,
    },
    {
      day: 'Fri',
      icon: <Icon5 />,
    },
    {
      day: 'Sat',
      icon: <Icon6 />,
    },
    {
      day: 'Sun',
      icon: <Icon7 />,
    },
  ],
}

const labelTopMonth = {
  arg: 'Month',
  variant: 'row',
  days: [
    {
      day: 'Mon',
      icon: <Icon1 />,
    },
    {
      day: 'Tue',
      icon: <Icon2 />,
    },
    {
      day: 'Wed',
      icon: <Icon3 />,
    },
    {
      day: 'Thu',
      icon: <Icon4 />,
    },
    {
      day: 'Fri',
      icon: <Icon5 />,
    },
    {
      day: 'Sat',
      icon: <Icon6 />,
    },
    {
      day: 'Sun',
      icon: <Icon7 />,
    },
  ],
}

const LabelStory = () => {
  return (
    <Stories
      argList={[labelTopWeek, labelTopMonth]}
      template={args => <LabelTop {...args} />}
    />
  )
}

export default LabelStory
