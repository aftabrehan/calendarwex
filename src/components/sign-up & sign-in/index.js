import { useEffect, useState } from 'react'

import SignUp from './signup'
import SignIn from './signin'
import Layout from 'components/layout'

const Form = () => {
  const [formType, setFormType] = useState(null)
  const user =
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (!user) {
      setFormType(1)
    } else {
      setFormType(2)
    }
  }, [user])

  const getElm = () => {
    switch (formType) {
      case 0:
        return <SignUp onClickHandler={setFormType} />

      case 1:
        return <SignIn onClickHandler={setFormType} />

      case 2:
        return <Layout logoutHandler={setFormType} />
    }
  }

  return <div>{getElm()}</div>
}

export default Form
