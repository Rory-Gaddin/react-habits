import React from 'react'
import PropTypes from 'prop-types'
import styles from './Backdrop.module.css';

const Backdrop = props => {
  return props.show
  ? <div className={styles.Backdrop} onClick={props.onClick}></div> 
  : null
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Backdrop
