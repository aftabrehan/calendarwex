import { useEffect, useState } from 'react'
import { auth, database } from '../../../pages/api/firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { child, get, ref } from 'firebase/database'

import stl from './SignUp&SignIn.module.scss'

const LoggedIn = ({ onClickHandler }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const [data, setData] = useState([])

  onAuthStateChanged(auth, user => {
    if (user) {
      setUser(user)
    } else {
      setError('You,re not logged in. Go to login page to login in')
    }
  })

  const signOutHandler = () => {
    signOut(auth)
    alert('user signed out')
  }

  return (
    <div className={stl.loggedInContainer}>
      <h1>Logged in User</h1>
      <div className={stl.userData}>
        <div className={stl.user}>
          <h3>{user?.email || error}</h3>
          <button onClick={signOutHandler}>Log Out</button>
        </div>
        <button
          onClick={() => {
            onClickHandler(0)
          }}
        >
          Go to Sign In Page
        </button>
        <br />
        <br />
        <br />
        OR
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            onClickHandler(1)
          }}
        >
          Go to Login Page
        </button>
      </div>
    </div>
  )
}

export default LoggedIn
