import PropTypes from 'prop-types';
import React from 'react';
import styles from './Input.module.css';

const Input = props => {
  let inputElement = null;
  let classNames = styles.InputElement;
  if (!props.valid && props.touched) {
    classNames += ` ${styles.InvalidInput}`
  }
  const errors = props.errors || [];

  switch (props.elementType) {
    case 'single-line':
    inputElement = (
      <input 
        className={classNames} 
        onChange={props.changed}
        {...props.elementConfig} 
        
      />
    )
    break;

    case 'text-area':
    inputElement = (
      <textarea 
        className={classNames} 
        onChange={props.changed}
        {...props.elementConfig} 
        
      />
    )
    break;

    case 'select':
    inputElement = (
      <select 
        className={classNames}
        onChange={props.changed}
        value={props.value || ''}
      >
        <option value="">(Please select one)</option>
        {props.elementConfig.options.map(option => (
          <option  
            key={option.value || option}
            value={option.value || option}>{option.displayValue || option}
          </option>
        ))}
      </select>
    )
    break;

    default:
    inputElement = <div>Unknown elementType {props.elementType}!</div>
  }

  return (
    <div>
      <label>{process.label}</label>
      {inputElement}
      <div className={styles.HintContainer}>
        {errors.map((err, i) => 
          <p key={i} className={styles.ErrorMessage}>{err}</p>
        )}
      </div>
    </div>
  )
}

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.object.isRequired,
  changed: PropTypes.func.isRequired,
  value: PropTypes.string,
  errors: PropTypes.array
};;

export default Input
