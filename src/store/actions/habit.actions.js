import { DataLoadingState } from "../reducers/habit.reducer";
import habitsService from './../../http-services/habits-service';

export const REQUEST_NEW_HABIT_FORM = 'request-new-habit-form';
export const requestNewHabitForm = () => ({
  type: REQUEST_NEW_HABIT_FORM
})

export const REQUEST_EDIT_HABIT_FORM = 'request-edit-habit-form';
export const requestEditHabitForm = habit => ({
  type: REQUEST_EDIT_HABIT_FORM,
  habit: habit
})

export const REFRESH_HABIT_LIST = 'refresh-habit-list';
export const refreshHabitList = () => async dispatch => {
  const operation = 'refreshHabitList'
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING, operation));
  const habits = await habitsService.getAllHabits();
  dispatch(({ type: REFRESH_HABIT_LIST, habits: habits }))
  dispatch(changeDataLoadingStatus(DataLoadingState.WAITING, operation));
}

export const SAVE_HABIT = 'save-habit';
export const saveHabit = habit => async dispatch => {
  const operation  = 'saveHabit'
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING, operation));

  const isNew = !habit.id;
  const savedHabit = await habitsService.saveHabit(habit);

  dispatch(changeDataLoadingStatus(DataLoadingState.WAITING, operation));
  dispatch({ type: SAVE_HABIT, habit: savedHabit, isNew: isNew });
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

export const NEW_HABIT_ADDED = 'new-habit-added';