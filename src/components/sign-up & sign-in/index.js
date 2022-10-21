import { useEffect, useState } from 'react'

import SignUp from './signup'
import SignIn from './signin'

import clsx from 'clsx'

import stl from './SignUp&SignIn.module.scss'

import Image from 'next/image'

import PersonIcon from 'assets/person_filled_FILL1_wght400_GRAD0_opsz20.svg'
import PassIcon from 'assets/lock_FILL1_wght400_GRAD0_opsz20.svg'
import FacebookIcon from 'assets/facebook-svgrepo-com.svg'
import GoogleIcon from 'assets/google-plus-3-logo-svgrepo-com.svg'
import TwitterIcon from 'assets/twitter-svgrepo-com.svg'
import MailIcon from 'assets/mail_FILL1_wght400_GRAD0_opsz20.svg'
import ConfirmPassIcon from 'assets/lock_FILL0_wght400_GRAD0_opsz20.svg'
import SignUpImage from './images/signup-image.jpg'
import SignInImage from './images/signin-image.jpg'

const Form = () => {
  const [formType, setFormType] = useState(0)

  const getElm = () => {
    switch (formType) {
      case 0:
        return <SignUp onClickHandler={setFormType} />

      case 1:
        return <SignIn onClickHandler={setFormType} />

      default:
        return <SignUp onClickHandler={setFormType} />
    }
  }

  return <div>{getElm()}</div>
}

export default Form
