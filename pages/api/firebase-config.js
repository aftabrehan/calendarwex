import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA0LrLoI9FQwuejm12mb9j1g3OyqwsMndc',
  authDomain: 'airy-shadow-364605.firebaseapp.com',
  databaseURL: 'https://airy-shadow-364605-default-rtdb.firebaseio.com',
  projectId: 'airy-shadow-364605',
  storageBucket: 'airy-shadow-364605.appspot.com',
  messagingSenderId: '540875195301',
  appId: '1:540875195301:web:8157a875164d49f381de4c',
  measurementId: 'G-FZHDB6MED1',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
export const auth = getAuth()
