import Stories from 'components/stories'
import LabelLeft from 'components/label/LabelLeft'

const labelLeft = {
  arg: 'labelLeft',
}

const LabelStory = () => {
  return (
    <Stories argList={[labelLeft]} template={args => <LabelLeft {...args} />} />
  )
}

export default LabelStory
