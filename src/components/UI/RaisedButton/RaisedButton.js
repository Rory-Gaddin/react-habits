import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './RaisedButton.css';
import { clone } from 'lodash';
import { ThemeContext } from './../../../contexts/theme.context';
import getThemeStyles from './../../../helpers/style.helper';

const thisPropTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

const RaisedButton = props => {
  const domProps = clone(props);
  Object.keys(thisPropTypes).forEach(key => delete domProps[key]);

  const themeCtx = useContext(ThemeContext)

  return (
    <button 
      className={
        `RaisedButton ${getThemeStyles('buttons.' + (props.type || 'primary'), themeCtx)}`
      }
      disabled={props.disabled}
      onClick={props.onClick}
      {...domProps}
    >{props.children}</button>
  )
}

RaisedButton.propTypes = thisPropTypes;

export default RaisedButton
