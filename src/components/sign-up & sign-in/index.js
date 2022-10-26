import { useEffect, useState } from 'react'

import SignUp from './signup'
import SignIn from './signin'
import Layout from 'components/layout'

const Form = () => {
  const [formType, setFormType] = useState(1)

  const getElm = () => {
    switch (formType) {
      case 0:
        return <SignUp onClickHandler={setFormType} />

      case 1:
        return <SignIn onClickHandler={setFormType} />

      case 2:
        return <Layout />

      default:
        return <SignIn onClickHandler={setFormType} />
    }
  }

  return <div>{getElm()}</div>
}

export default Form
