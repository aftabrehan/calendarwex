import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRTx49CWCRTDhLPCTQ0L-X41izAZ4nP4Q',
  authDomain: 'calendarwex.firebaseapp.com',
  projectId: 'calendarwex',
  storageBucket: 'calendarwex.appspot.com',
  messagingSenderId: '873851581941',
  appId: '1:873851581941:web:85d2bf2b82912909301cbc',
  measurementId: 'G-8HDED7ZN60',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const User = collection(db, 'test')

module.exports = User
