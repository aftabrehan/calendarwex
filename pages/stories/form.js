import Form from 'components/sign-up & sign-in'
import Stories from 'components/stories/'

const form = {
  arg: 'Form',
}

const FormStory = () => (
  <Stories argList={[form]} template={args => <Form {...args} />} />
)

export default FormStory
