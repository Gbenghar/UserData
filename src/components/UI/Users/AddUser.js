import React, {useState } from 'react'
import Card from '../Card/Card'
import classes from './AddUser.module.css'
import Button from '../Button/Button'
import ErrorModal from '../ErrorModal/ErrorModal'
  

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, seterror] = useState()

  const addUserHandler = event => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)  {
      seterror({
        title: 'Invalid input',
        message: 'Please enter a valid name'
      })
      return
    }
    if (+enteredAge < 1) {
      seterror({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredAge('')
    setEnteredUsername('')
  }

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value)
  }
  const errorHandler = () => {
    seterror(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onClick={errorHandler}
      />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age(Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser
