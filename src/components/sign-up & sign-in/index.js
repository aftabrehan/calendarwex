import { useEffect, useState } from 'react'

import SignUp from './signup'
import SignIn from './signin'
import LoggedIn from './LoggedIn'

const Form = () => {
  const [formType, setFormType] = useState(0)

  const getElm = () => {
    switch (formType) {
      case 0:
        return <SignUp onClickHandler={setFormType} />

      case 1:
        return <SignIn onClickHandler={setFormType} />

      case 2:
        return <LoggedIn onClickHandler={setFormType} />

      default:
        return <SignUp onClickHandler={setFormType} />
    }
  }

  return <div>{getElm()}</div>
}

export default Form
