import React, { Component } from 'react';
import { connect } from 'react-redux';
import HabitConfiguration from '../HabitConfiguration/HabitConfiguration';
import { ThemeContext } from './../../contexts/theme.context';
import getThemeStyles from './../../helpers/style.helper';
import * as habitActions from './../../store/actions/habit.actions';
import { HabitDisplayState, DataLoadingState } from './../../store/reducers/habit.reducer';
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
        {this.loadingMessage()}
        {this.habitList()}
      </div>
      {this.newHabitForm()}
      {this.editHabitForm(this.props.editedHabit)}
    </div>
  )}</ThemeContext.Consumer> 

  /** 
   * UI Fragment Functions
   */

  habitList = () => this.props.habits.length > 0
  ? this.props.habits.map(h => 
      <Habit 
        key={h.id} 
        habit={h}
        onEditRequested={h => this.props.onEditHabit(h)}
      />
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
        onSave={this.saveHabitHandler}
      ></HabitConfiguration>
    </Modal>
  : null;

  editHabitForm = habit => this.props.displayState === HabitDisplayState.EDIT_HABIT
  ? <Modal 
      title="Edit Habit"
      actions={[]}
      onDismiss={() => this.props.onDisplayStateChange(HabitDisplayState.SHOW_HABIT_LIST)}
    >
      <HabitConfiguration 
        habit={habit}
        onSave={this.saveHabitHandler}
      ></HabitConfiguration>
    </Modal>
  : null;

  loadingMessage = () => this.props.isLoading
  ? <div>Loading data...</div>
  : null

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

  saveHabitHandler = habit => {
    this.props.onSaveHabit(habit);
    this.props.onDisplayStateChange(HabitDisplayState.SHOW_HABIT_LIST);
  }
}

const mapStateToProps = state => ({ 
  habits: state.HABITS.habits,
  editedHabit: state.HABITS.editedHabit,
  displayState: state.HABITS.displayState,
  isLoading: state.HABITS.dataLoadingState === DataLoadingState.LOADING
})

const mapDispatchToProps = dispatch => ({
  onRefreshHabitList: () => dispatch(habitActions.refreshHabitList()),
  onAddNewHabit: () => dispatch(habitActions.requestNewHabitForm()),
  onEditHabit: habit => dispatch(habitActions.requestEditHabitForm(habit)),
  onSaveHabit: habit => dispatch(habitActions.saveHabit(habit)),
  onDisplayStateChange: newState => dispatch(habitActions.changeDisplayState(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(HabitList)