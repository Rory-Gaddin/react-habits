import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';
import RaisedButton from './../RaisedButton/RaisedButton';
import { ThemeContext } from './../../../contexts/theme.context';
import getThemeStyles from './../../../helpers/style.helper';

const Modal = props => {

  const themeCtx = useContext(ThemeContext);

  return (
    <React.Fragment>
      <Backdrop show={true} onClick={props.onDismiss} />
      <div className={styles.Modal}>
        <div className={getThemeStyles(
          ['background.highlight30Perc','text.against30PercBg'], 
          themeCtx, 
          styles.ModalTitleBar
        )}>{props.title}</div>
        <div className={styles.ModalContent}>{props.children}</div>
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
  title: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
}

export default Modal
