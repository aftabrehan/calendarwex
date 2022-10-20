import Stories from 'components/stories'
import SignIn from 'components/sign-up & sign-in/signin'

const signIn = {
  arg: 'Sign-In',
}

const SignInStory = () => (
  <Stories argList={[signIn]} template={args => <SignIn {...args} />} />
)

export default SignInStory
