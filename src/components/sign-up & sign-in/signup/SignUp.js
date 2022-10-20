import clsx from 'clsx'

import stl from '../SignUp&SignIn.module.scss'

import Image from 'next/image'

import PersonIcon from 'assets/person_filled_FILL1_wght400_GRAD0_opsz20.svg'
import MailIcon from 'assets/mail_FILL1_wght400_GRAD0_opsz20.svg'
import PassIcon from 'assets/lock_FILL1_wght400_GRAD0_opsz20.svg'
import ConfirmPassIcon from 'assets/lock_FILL0_wght400_GRAD0_opsz20.svg'
import SignUpImage from '../images/signup-image.jpg'

const SignUp = () => {
  return (
    <div className={stl.container}>
      <div className={stl.signUpContent}>
        <div className={stl.signUpForm}>
          <h2 className={stl.formTitle}>Sign Up</h2>
          <form className={stl.form} id="signupform">
            <div className={stl.formGroup}>
              <label for="name" className={stl.label}>
                <PersonIcon className={stl.icon} />
              </label>
              <input
                className={stl.input}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className={stl.formGroup}>
              <label for="email" className={stl.label}>
                <MailIcon className={stl.icon} />
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                className={stl.input}
              />
            </div>
            <div className={stl.formGroup}>
              <label for="pass" className={stl.label}>
                <PassIcon className={stl.icon} />
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                className={stl.input}
              />
            </div>
            <div className={stl.formGroup}>
              <label for="confrimPass" className={stl.label}>
                <ConfirmPassIcon className={stl.icon} />
              </label>
              <input
                type="password"
                name="confrimPass"
                id="confrimPass"
                placeholder="Confirm Your Password"
                className={stl.input}
              />
            </div>
            <div className={clsx(stl.formGroup, stl.checkbox)}>
              <input
                type="checkbox"
                name="agreeterm"
                id="agreeterm"
                className={stl.agreeTerm}
              />
              <label for="agreeterm" className={stl.labelAgreeTerm}>
                <span>
                  I agree all statements in &nbsp;
                  <a href="#" className={stl.termService}>
                    Terms of Service
                  </a>
                </span>
              </label>
            </div>
            <div className={clsx(stl.formGroup, stl.formButton)}>
              <input
                type="submit"
                name="signup"
                id="signup"
                value="Sign Up"
                className={stl.formSubmit}
              />
            </div>
          </form>
        </div>
        <div className={stl.signUpImage}>
          <figure>
            <Image src={SignUpImage} alt="Sign Up Image" />
          </figure>
          <a href="./signin" className={stl.signUpImageLink}>
            I am already member
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
