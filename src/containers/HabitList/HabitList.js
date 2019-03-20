import React, { Component } from 'react'
import Habit from './../Habit/Habit';
import HabitConfiguration from '../HabitConfiguration/HabitConfiguration';
import './HabitList.css';
import getThemeStyles from './../../helpers/style.helper';
import { ThemeContext } from './../../contexts/theme.context';
import habitsService from './../../http-services/habits-service';

const HABIT_LIST = 'show-habits';
const NEW_HABIT = 'new-habit';

export default class HabitList extends Component {
  render = () => <ThemeContext.Consumer>{themeCtx => (
    <div className={getThemeStyles('background.primary', themeCtx, 'HabitContainer')}>
      <button
        onClick={this.addHabitHandler}
      >+</button>
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
  ? this.state.habits.length > 0
    ? this.state.habits.map(h => 
        <Habit key={h.id} habit={h} />
      )
    : <ThemeContext.Consumer>{themeCtx => (
        <div className={getThemeStyles('text.secondary', themeCtx, 'NoHabitsMessage')}>
          <p>You don't have any Habits defined yet.</p>
          <p>Try creating a new one from the menu above</p>
        </div>
      )}</ThemeContext.Consumer>
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

  async componentDidMount() {
    const _habits = await this._getAllHabits();
    this.setState({ habits: _habits })
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
  
  /** 
   * Private methods
   */
  _getAllHabits = async () => {
    const response = await habitsService.get('/habits');
    const habits = response.data.map(h => ({
      id: h.id,
      name: h.name,
      question: h.question
    }));
    return habits;
  }
}
