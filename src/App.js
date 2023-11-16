import React, { useState } from 'react'
import AddUser from './components/UI/Users/AddUser'
import UsersList from './components/UI/UsersList/UsersList'

function App () {
  const [usersList, setusersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setusersList(initUsersList => {
      return [
        ...initUsersList,
        { name: userName, age: userAge, id: Math.random().toString() }
      ]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
