import React, { Component } from 'react';
import { connect } from 'react-redux';
import HabitConfiguration from '../HabitConfiguration/HabitConfiguration';
import { ThemeContext } from './../../contexts/theme.context';
import getThemeStyles from './../../helpers/style.helper';
import * as habitActions from './../../store/actions/habit.actions';
import { HabitDisplayState } from './../../store/reducers/habit.reducer';
import Habit from './../Habit/Habit';
import './HabitList.css';
import RaisedButton from './../../components/UI/RaisedButton/RaisedButton';
import Modal from './../../components/UI/Modal/Modal';

class HabitList extends Component {
  render = () => <ThemeContext.Consumer>{themeCtx => (
    <div className={getThemeStyles('background.primary', themeCtx, 'HabitContainer')}>
      <RaisedButton
        onClick={this.props.onAddNewHabit}
      >Add a Habit</RaisedButton>
      <div className="HabitListContainer">
        {this.habitList()}
      </div>
      {this.newHabitForm()}
    </div>
  )}</ThemeContext.Consumer> 

  /** 
   * UI Fragment Functions
   */

  habitList = () => this.props.habits.length > 0
  ? this.props.habits.map(h => 
      <Habit key={h.id} habit={h} />
    )
  : <ThemeContext.Consumer>{themeCtx => (
      <div className={getThemeStyles('text.secondary', themeCtx, 'NoHabitsMessage')}>
        <p>You don't have any Habits defined yet.</p>
        <p>Try creating a new one from the menu above</p>
      </div>
    )}</ThemeContext.Consumer>
  ;

  newHabitForm = () => this.props.displayState === HabitDisplayState.NEW_HABIT
  ? <Modal 
      title="Create a new Habit"
      actions={[]}
      onDismiss={() => this.props.onDisplayStateChange(HabitDisplayState.SHOW_HABIT_LIST)}
    >
      <HabitConfiguration 
        habit={null}
        onSave={this.saveNewHabitHandler}
      ></HabitConfiguration>
    </Modal>
  : null;

  /** 
   * Lifecycle hooks
   */

  async componentDidMount() {
    this.props.onRefreshHabitList();
  }

  /** 
   * UI Event Handlers
   */

  addHabitHandler = () => {
    this.setState({ displayState: HabitDisplayState.NEW_HABIT })
  }

  saveNewHabitHandler = (newHabit) => {
    const _new = {...newHabit, id: (this.props.habits.length + 1).toString()}
    this.props.onSaveHabit(_new);
    this.props.onDisplayStateChange(HabitDisplayState.SHOW_HABIT_LIST);
  }
}

const mapStateToProps = state => ({ 
  habits: state.HABITS.habits,
  displayState: state.HABITS.displayState
})

const mapDispatchToProps = dispatch => ({
  onRefreshHabitList: () => dispatch({ type: habitActions.REFRESH_HABIT_LIST }),
  onAddNewHabit: () => dispatch({ type: habitActions.REQUEST_NEW_HABIT_FORM }),
  onSaveHabit: (habit) => dispatch({ type: habitActions.SAVE_HABIT, habit: habit }),
  onDisplayStateChange: (newState) => dispatch({ type: habitActions.CHANGE_DISPLAY_STATE, displayState: newState })
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitList)