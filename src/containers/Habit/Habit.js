import React, { Component } from 'react'
import './Habit.css'
import { ThemeContext } from './../../contexts/theme.context';
import getThemeStyles from '../../helpers/style.helper';

export default class Habit extends Component {
  render = () => <ThemeContext.Consumer>{themeCtx => (
    <div 
      className={getThemeStyles(['background.secondary', 'text.primary'], themeCtx, 'Habit')}
      onClick={() => this.props.onEditRequested(this.props.habit)}
    >
      {this.props.habit.name}
    </div>
  )}</ThemeContext.Consumer> 
}
