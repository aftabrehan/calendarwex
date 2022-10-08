import Stories from 'components/stories'
import LabelTop from 'components/label'

import BrainIcon from '../../src/assets/brain.svg'
import CamelIcon from '../../src/assets/camel.svg'
import CocktailGlassIcon from '../../src/assets/cocktail-glass.svg'
import HotBeverageIcon from '../../src/assets/hot-beverage.svg'
import ZombieIcon from '../../src/assets/zombie.svg'
import PartyPopperIcon from '../../src/assets/party-popper.svg'
import MassageIcon from '../../src/assets/women-getting-massage.svg'
import BlankIcon from '../../src/assets/blank.svg'

const labelTopWeek = {
  arg: 'Week',
  variant: 'row',
  gap: <BlankIcon />,
  days: [
    {
      day: 'Mon',
      icon: <BrainIcon />,
    },
    {
      day: 'Tue',
      icon: <CamelIcon />,
    },
    {
      day: 'Wed',
      icon: <CocktailGlassIcon />,
    },
    {
      day: 'Thu',
      icon: <HotBeverageIcon />,
    },
    {
      day: 'Fri',
      icon: <ZombieIcon />,
    },
    {
      day: 'Sat',
      icon: <PartyPopperIcon />,
    },
    {
      day: 'Sun',
      icon: <MassageIcon />,
    },
  ],
}

const labelTopMonth = {
  arg: 'Month',
  variant: 'row',
  days: [
    {
      day: 'Mon',
      icon: <BrainIcon />,
    },
    {
      day: 'Tue',
      icon: <CamelIcon />,
    },
    {
      day: 'Wed',
      icon: <CocktailGlassIcon />,
    },
    {
      day: 'Thu',
      icon: <HotBeverageIcon />,
    },
    {
      day: 'Fri',
      icon: <ZombieIcon />,
    },
    {
      day: 'Sat',
      icon: <PartyPopperIcon />,
    },
    {
      day: 'Sun',
      icon: <MassageIcon />,
    },
  ],
}

const LabelStory = () => (
  <Stories
    argList={[labelTopWeek, labelTopMonth]}
    template={args => <LabelTop {...args} />}
  />
)

export default LabelStory
