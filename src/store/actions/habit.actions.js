import { DataLoadingState } from "../reducers/habit.reducer";
import habitsService from './../../http-services/habits-service';

export const REQUEST_NEW_HABIT_FORM = 'request-new-habit-form';
export const requestNewHabitForm = () => ({
  type: REQUEST_NEW_HABIT_FORM
})

export const REFRESH_HABIT_LIST = 'refresh-habit-list';
export const refreshHabitList = () => async dispatch => {
  const operation = 'refreshHabitList'
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING, operation));

  const habitData = (await habitsService.get('user/rory-gaddin/habits.json')).data;
  const habits = habitData
  ? Object.keys(habitData).map(key => habitData[key])
  : []

  dispatch(({ type: REFRESH_HABIT_LIST, habits: habits }))
  dispatch(changeDataLoadingStatus(DataLoadingState.WAITING, operation));
}

export const SAVE_HABIT = 'save-habit';
export const saveHabit = habit => async dispatch => {
  const operation  = 'saveHabit'
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING, operation));

  await habitsService.post('user/rory-gaddin/habits.json', habit);
  
  dispatch(changeDataLoadingStatus(DataLoadingState.WAITING, operation));
  dispatch({ type: SAVE_HABIT, habit: habit });
};

export const CHANGE_DISPLAY_STATE = 'change-display-state';
export const changeDisplayState = newState => ({
  type: CHANGE_DISPLAY_STATE,
  displayState: newState
})

export const CHANGE_DATA_LOADING_STATUS = 'change-data-loading-status';
export const changeDataLoadingStatus = (status, operation) => ({
  type: CHANGE_DATA_LOADING_STATUS,
  state: status,
  operation: operation
})