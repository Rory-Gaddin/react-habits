import { DataLoadingState } from "../reducers/habit.reducer";

export const REQUEST_NEW_HABIT_FORM = 'request-new-habit-form';
export const requestNewHabitForm = () => ({
  type: REQUEST_NEW_HABIT_FORM
})

export const REFRESH_HABIT_LIST = 'refresh-habit-list';
export const refreshHabitList = () => dispatch => {
  const operation = 'refreshHabitList'
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING, operation));
  
  setTimeout(() => {
    dispatch(changeDataLoadingStatus(DataLoadingState.WAITING, operation));
    dispatch(({ type: REFRESH_HABIT_LIST, habits: [] }))
  }, 2000)
}

export const SAVE_HABIT = 'save-habit';
export const saveHabit = habit => dispatch => {
  const operation  = 'saveHabit'
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING, operation));

  setTimeout(() => {
    dispatch(changeDataLoadingStatus(DataLoadingState.WAITING, operation));

    dispatch({
      type: SAVE_HABIT,
      habit: habit
    });
  }, 2000);
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