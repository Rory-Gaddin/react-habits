import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';
import RaisedButton from './../RaisedButton/RaisedButton';

const Modal = props => {
  return (
    <React.Fragment>
      <Backdrop show={true} onClick={props.onDismiss} />
      <div className={styles.Modal}>
        {props.children}
        {props.actions.map(action => 
          <RaisedButton 
            key={action.label} 
            onClick={action.callback}
            type={action.buttonStyle}
            text={action.label}
          />
        )}
      </div>
    </React.Fragment>
  )
}

Modal.propTypes = {
  actions: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
}

export default Modal
