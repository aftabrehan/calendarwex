import clsx from 'clsx'

import { auth, database } from '../../../../pages/api/firebase-config'
import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { update, ref } from 'firebase/database'

import { useEffect, useState } from 'react'

import stl from '../SignUp&SignIn.module.scss'

import Image from 'next/image'

import SignInImage from '../images/signin-image.jpg'
import PersonIcon from 'assets/person_filled_FILL1_wght400_GRAD0_opsz20.svg'
import PassIcon from 'assets/lock_FILL1_wght400_GRAD0_opsz20.svg'
import FacebookIcon from 'assets/facebook-svgrepo-com.svg'
import GoogleIcon from 'assets/google-plus-3-logo-svgrepo-com.svg'
import TwitterIcon from 'assets/twitter-svgrepo-com.svg'

const SignIn = ({ onClickHandler }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(result => {
        // Google Access Token to use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // Signed-in user info.
        const user = result.user

        console.log(user)

        onClickHandler(2)
        // ...
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        if (user.emailVerified === false) {
          signOut(auth)
          alert('User is not Verified')
        } else {
          const dt = new Date()

          const date = dt.toLocaleString()

          window.localStorage.setItem('user', JSON.stringify([email]))

          update(ref(database, 'users/' + user.uid), {
            last_login: date,
          }),
            keyValue
          onClickHandler(2)
          alert('User Logged in!')
        }
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message

        if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
          alert('User does not have account \nPlease create one')
          onClickHandler(0)
        } else {
          alert(errorMessage)
        }
      })

    setEmail('')
    setPassword('')
  }

  return (
    <div className={stl.container}>
      <div className={stl.signInContent}>
        <div className={stl.signInImage}>
          <figure>
            <Image src={SignInImage} alt="Sign In Image" priority />
          </figure>
          <button
            onClick={() => {
              onClickHandler(0)
            }}
            className={stl.signInImageLink}
          >
            Create an Account
          </button>
        </div>
        <div className={stl.signInForm}>
          <h2 className={stl.formTitle}>Log In</h2>
          <div className={stl.form} id="loginform">
            <div className={stl.formGroup}>
              <label className={stl.label}>
                <PersonIcon className={stl.icon} />
              </label>
              <input
                type="text"
                name="youremail"
                id="youremail"
                placeholder="Your Email"
                className={stl.input}
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className={stl.formGroup}>
              <label className={stl.label}>
                <PassIcon className={stl.icon} />
              </label>
              <input
                type="password"
                name="yourpass"
                id="yourpass"
                placeholder="Password"
                className={stl.input}
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className={clsx(stl.formGroup, stl.checkbox)}>
              <input
                type="checkbox"
                name="rememberme"
                className={stl.rememberMe}
              />
              <label className={stl.labelAgreeTerm}>Remember Me</label>
            </div>
            <div className={clsx(stl.formGroup, stl.formButton)}>
              <input
                type="submit"
                name="login"
                id="login"
                value="Log in"
                className={stl.formSubmit}
                onClick={loginHandler}
              />
            </div>
          </div>
          <div className={stl.socialLogin}>
            <span className={stl.socialLabel}>Or login with</span>
            <ul className={stl.socials}>
              <li>
                <button onClick={() => console.log('Facebook button clicked')}>
                  <FacebookIcon className={stl.linkFacebook} />
                </button>
              </li>
              <li>
                <button onClick={loginWithGoogle}>
                  <GoogleIcon className={stl.linkGoogle} />
                </button>
              </li>
              <li>
                <button onClick={() => console.log('Twitter button clicked')}>
                  <TwitterIcon className={stl.linkTwitter} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          onClickHandler(2)
        }}
      >
        Click me!
      </button>
    </div>
  )
}

export default SignIn
