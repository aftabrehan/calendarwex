import Stories from 'components/stories'
import SignUp from 'components/sign-up & sign-in/signup'

const signup = {
  arg: 'Sign-UP',
}

const SignUpStory = () => (
  <Stories argList={[signup]} template={args => <SignUp {...args} />} />
)

export default SignUpStory
