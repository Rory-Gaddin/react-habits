import React from 'react'
import PropTypes from 'prop-types'
import styles from './RaisedButton.module.css';
import { clone } from 'lodash';

const thisPropTypes = {
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
    >{props.children}</button>
  )
}

RaisedButton.propTypes = thisPropTypes;

export default RaisedButton
