import React from 'react'
import PropTypes from 'prop-types'
import styles from './RaisedButton.module.css';
import { clone } from 'lodash';

const thisPropTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

const RaisedButton = props => {
  const domProps = clone(props);
  Object.keys(thisPropTypes).forEach(key => delete domProps[key]);

  return (
    <button 
      className={
        `${styles.RaisedButton} 
        ${props.type ? (styles[props.type] || '') : 'Primary'}`
      }
      disabled={props.disabled}
      onClick={props.onClick}
      {...domProps}
    >{props.text}</button>
  )
}

RaisedButton.propTypes = thisPropTypes;

export default RaisedButton
