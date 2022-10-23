import { auth, database } from '../../../../pages/api/firebase-config'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from 'firebase/auth'
import { set, ref } from 'firebase/database'

import clsx from 'clsx'

import stl from '../SignUp&SignIn.module.scss'

import Image from 'next/image'

import PersonIcon from 'assets/person_filled_FILL1_wght400_GRAD0_opsz20.svg'
import MailIcon from 'assets/mail_FILL1_wght400_GRAD0_opsz20.svg'
import PassIcon from 'assets/lock_FILL1_wght400_GRAD0_opsz20.svg'
import ConfirmPassIcon from 'assets/lock_FILL0_wght400_GRAD0_opsz20.svg'
import SignUpImage from '../images/signup-image.jpg'
import { useState } from 'react'

const SignUp = ({ onClickHandler }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = () => {
    let flag = 1
    const checkbox = document.getElementById('agreeterm')

    ;(name === '' && ((flag = 0), alert('Name is Empty'))) ||
      (email === '' && ((flag = 0), alert('Email is Empty'))) ||
      (password === '' && ((flag = 0), alert('Password is Empty'))) ||
      (confirmPassword === '' && ((flag = 0), alert('Confirm Password!'))) ||
      (password !== confirmPassword &&
        ((flag = 0), alert('Password did not match'))) ||
      (checkbox.checked == false &&
        ((flag = 0), alert('Please check the Agree Terms checkbox')))

    if (flag) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user
          sendEmailVerification(user)
            .then(() => {
              alert(`Email verification link sent to: ${user.email}`)
            })
            .catch(error => {
              alert(error.message)
            })

          signOut(auth)

          set(ref(database, 'users/' + user.uid), {
            username: name,
            email: email,
          })

          alert('User Created')
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          alert(errorMessage)
        })

      onClickHandler(1)
    } else {
      console.log(false)
    }

    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    checkbox.checked = false
  }

  return (
    <div className={stl.container}>
      <div className={stl.signUpContent}>
        <div className={stl.signUpForm}>
          <h2 className={stl.formTitle}>Sign Up</h2>
          <div className={stl.form} id="signupform">
            <div className={stl.formGroup}>
              <label className={stl.label}>
                <PersonIcon className={stl.icon} />
              </label>
              <input
                className={stl.input}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className={stl.formGroup}>
              <label className={stl.label}>
                <MailIcon className={stl.icon} />
              </label>
              <input
                type="text"
                name="email"
                id="email"
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
                name="pass"
                id="pass"
                placeholder="Password"
                className={stl.input}
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className={stl.formGroup}>
              <label className={stl.label}>
                <ConfirmPassIcon className={stl.icon} />
              </label>
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                placeholder="Confirm Your Password"
                className={stl.input}
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <div className={clsx(stl.formGroup, stl.checkbox)}>
              <input
                type="checkbox"
                name="agreeterm"
                id="agreeterm"
                className={stl.agreeTerm}
              />
              <label className={stl.labelAgreeTerm}>
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
                id="signup"
                value="Sign up"
                className={stl.formSubmit}
                onClick={submitHandler}
              />
            </div>
          </div>
        </div>
        <div className={stl.signUpImage}>
          <figure>
            <Image src={SignUpImage} alt="Sign Up Image" priority />
          </figure>
          <button
            onClick={() => {
              onClickHandler(1)
            }}
            className={stl.signUpImageLink}
          >
            I am already member
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
