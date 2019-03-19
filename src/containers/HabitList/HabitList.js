import React, { Component } from 'react'
import Habit from './../Habit/Habit';
import HabitConfiguration from '../HabitConfiguration/HabitConfiguration';
import './HabitList.css';
import getThemeStyles from './../../helpers/style.helper';
import { ThemeContext } from './../../contexts/theme.context';

const HABIT_LIST = 'show-habits';
const NEW_HABIT = 'new-habit';

export default class HabitList extends Component {
  render = () => <ThemeContext.Consumer>{themeCtx => (
    <div className={getThemeStyles('background.primary', themeCtx, 'HabitContainer')}>
      <header className={getThemeStyles('background.highlight10Perc', themeCtx, 'HabitHeader')}>
        <nav>
          <h1 className={getThemeStyles('text.primary', themeCtx)}>Welcome to React Habits</h1>
          <button
            onClick={this.addHabitHandler}
          >+</button>
        </nav>
      </header>
      <div className="HabitListContainer">
        {this.habitList()}
      </div>
      {this.newHabitForm()}
    </div>
  )}</ThemeContext.Consumer> 

  state = {
    habits: [],
    displayState: HABIT_LIST
  }

  /** 
   * UI Fragment Functions
   */

  habitList = () => this.state.displayState === HABIT_LIST
  ? this.state.habits.map(h => 
    <Habit key={h.id} habit={h} />
  )
  : null;

  newHabitForm = () => this.state.displayState === NEW_HABIT
  ? <HabitConfiguration 
      habit={null}
      onSave={this.saveNewHabitHandler}
    ></HabitConfiguration>
  : null;

  /** 
   * Lifecycle hooks
   */

  componentDidMount() {
    this.setState({
      habits: [
        { id: 'ABCD', name: 'Mow the lawn', question: 'Did you mow the lawn this week?'},
        { id: 'DEF', name: 'Shave your beard', question: 'Did you shave your beard in the last few days?'},
        { id: 'XYZ', name: 'Say something nice to someone', question: 'Have you been decent...upstanding?!'},
      ]
    })
  }

  /** 
   * UI Event Handlers
   */

  addHabitHandler = () => {
    this.setState({ displayState: NEW_HABIT })
  }

  saveNewHabitHandler = (newHabit) => {
    const _new = {...newHabit, id: (this.state.habits.length + 1).toString()}
    this.setState(prevState => ({ 
      habits: prevState.habits.concat([_new]),
      displayState: HABIT_LIST
    }));
  }
  
}
