import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}>
      <div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
