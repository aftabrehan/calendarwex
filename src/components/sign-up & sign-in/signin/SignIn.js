import clsx from 'clsx'

import stl from '../SignUp&SignIn.module.scss'

import Image from 'next/image'

import SignInImage from '../images/signin-image.jpg'
import PersonIcon from 'assets/person_filled_FILL1_wght400_GRAD0_opsz20.svg'
import PassIcon from 'assets/lock_FILL1_wght400_GRAD0_opsz20.svg'
import FacebookIcon from 'assets/facebook-svgrepo-com.svg'
import GoogleIcon from 'assets/google-plus-3-logo-svgrepo-com.svg'
import TwitterIcon from 'assets/twitter-svgrepo-com.svg'

const SignIn = () => {
  return (
    <div className={stl.container}>
      <div className={stl.signInContent}>
        <div className={stl.signInImage}>
          <figure>
            <Image src={SignInImage} alt="Sign In Image" />
          </figure>
          <a href="./signup" className={stl.signInImageLink}>
            Create an Account
          </a>
        </div>
        <div className={stl.signInForm}>
          <h2 className={stl.formTitle}>Sign In</h2>
          <form className={stl.form} id="loginform">
            <div className={stl.formGroup}>
              <label for="yourname" className={stl.label}>
                <PersonIcon className={stl.icon} />
              </label>
              <input
                type="text"
                name="yourname"
                id="yourname"
                placeholder="Your Name"
                className={stl.input}
              />
            </div>
            <div className={stl.formGroup}>
              <label for="yourpass" className={stl.label}>
                <PassIcon className={stl.icon} />
              </label>
              <input
                type="password"
                name="yourpass"
                id="yourpass"
                placeholder="Password"
                className={stl.input}
              />
            </div>
            <div className={clsx(stl.formGroup, stl.checkbox)}>
              <input
                type="checkbox"
                name="rememberme"
                className={stl.rememberMe}
              />
              <label for="rememberme" className={stl.labelAgreeTerm}>
                Remember Me
              </label>
            </div>
            <div className={clsx(stl.formGroup, stl.formButton)}>
              <input
                type="submit"
                name="login"
                id="login"
                value="Login"
                className={stl.formSubmit}
              />
            </div>
          </form>
          <div className={stl.socialLogin}>
            <span className={stl.socialLabel}>Or login with</span>
            <ul className={stl.socials}>
              <li>
                <a href="https://www.facebook.com">
                  <FacebookIcon className={stl.linkFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.google.com">
                  <GoogleIcon className={stl.linkGoogle} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com">
                  <TwitterIcon className={stl.linkTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
