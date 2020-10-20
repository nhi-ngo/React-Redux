import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal-dialog">
      <div className="modal-content">
        <h4 className="modal-header">{props.title}</h4>
        <div className="content modal-body">{props.content}</div>
        <div className="actions modal-footer">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
