import PropTypes from 'prop-types';
import React from 'react';
import styles from './Input.module.css';

export const InputType = {
  SINGLE_LINE_TEXT: 'single-line-text',
  TEXT_AREA: 'text-area',
  SELECT: 'select'
}

const Input = props => {
  let inputElement = null;
  let classNames = styles.InputElement;
  if (!props.valid && props.touched) {
    classNames += ` ${styles.InvalidInput}`
  }
  const errors = props.errors || [];

  switch (props.elementType) {
    case InputType.SINGLE_LINE_TEXT:
    inputElement = (
      <input 
        className={classNames} 
        onChange={props.changed}
        {...props.elementConfig} 
        
      />
    )
    break;

    case InputType.TEXT_AREA:
    inputElement = (
      <textarea 
        className={classNames} 
        onChange={props.changed}
        {...props.elementConfig} 
        
      />
    )
    break;

    case InputType.SELECT:
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
  elementConfig: PropTypes.object,
  changed: PropTypes.func.isRequired,
  value: PropTypes.string,
  errors: PropTypes.array
};;

export default Input
