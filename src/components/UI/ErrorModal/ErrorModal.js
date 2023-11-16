import React from 'react'
import Card from '../Card/Card'
import Button from '../Button/Button'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClick} />
}

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h3>{props.title}</h3>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Close</Button>
      </footer>
    </Card>
  )
}
const ErrorModal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  )
}

export default ErrorModal
