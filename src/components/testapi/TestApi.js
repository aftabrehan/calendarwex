import User from '../../../pages/api/firebase-config'
import { addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

import stl from './TestApi.module.scss'

const TestApi = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [newName, setNewName] = useState('')
  const [newUserName, setNewUserName] = useState('')

  const addUser = async () => {
    const data = {
      name,
      userName,
    }

    await addDoc(User, data)
  }

  const updateName = async id => {
    const newFields = { name: newName }
    const userDoc = doc(User, id)

    await updateDoc(userDoc, newFields)
  }

  const updateUserName = async id => {
    const newFields = { userName: newUserName }
    const userDoc = doc(User, id)

    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async id => {
    const userDoc = doc(User, id)

    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(User)
      setUsers(
        data.docs.map((doc, i) => ({
          id: doc.id,
          ...doc.data(),
          key: i,
        }))
      )
    }

    getUsers()
  }, [])

  return (
    <div>
      <h1>Test Api</h1>

      <div className={stl.input}>
        <input
          type="text"
          placeholder="Name..."
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={e => setUserName(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        {users.map((user, i) => (
          <div key={i} className={stl.dataContainer}>
            <div className={stl.name}>
              <h3>Name: {user.name}</h3>
              <input
                type="text"
                placeholder="Enter New Name..."
                onChange={e => setNewName(e.target.value)}
              />
              <button onClick={() => updateName(user.id)}>Update</button>
            </div>
            <div className={stl.userName}>
              <h3>UserName: {user.userName}</h3>
              <input
                type="text"
                placeholder="Enter New UserName..."
                onChange={e => setNewUserName(e.target.value)}
              />
              <button onClick={() => updateUserName(user.id)}>Update</button>
            </div>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestApi
