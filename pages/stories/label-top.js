import Stories from 'components/stories'
import LabelTop from 'components/label'

import BrainIcon from 'assets/brain.svg'
import CamelIcon from 'assets/camel.svg'
import CocktailGlassIcon from 'assets/cocktail-glass.svg'
import HotBeverageIcon from 'assets/hot-beverage.svg'
import ZombieIcon from 'assets/zombie.svg'
import PartyPopperIcon from 'assets/party-popper.svg'
import MassageIcon from 'assets/women-getting-massage.svg'
import BlankIcon from 'assets/blank.svg'

const labelTopEmpty = {
  arg: 'Empty',
  type: 'row',
}

const labelTopWeek = {
  arg: 'Week',
  type: 'row',
  gap: <BlankIcon />,
  dayHeader: [
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
  type: 'row',
  dayHeader: [
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
    argList={[labelTopEmpty, labelTopWeek, labelTopMonth]}
    template={args => <LabelTop {...args} />}
  />
)

export default LabelStory
