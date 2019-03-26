import { DataLoadingState } from "../reducers/habit.reducer";

export const REQUEST_NEW_HABIT_FORM = 'request-new-habit-form';
export const requestNewHabitForm = () => ({
  type: REQUEST_NEW_HABIT_FORM
})

export const REFRESH_HABIT_LIST = 'refresh-habit-list';
export const refreshHabitList = () => dispatch => {
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING));
  
  setTimeout(() => {
    dispatch(changeDataLoadingStatus(DataLoadingState.WAITING));
    dispatch(({ type: REFRESH_HABIT_LIST }))
  }, 2000)
}

export const SAVE_HABIT = 'save-habit';
export const saveHabit = habit => dispatch => {
  dispatch(changeDataLoadingStatus(DataLoadingState.LOADING));

  setTimeout(() => {
    dispatch(changeDataLoadingStatus(DataLoadingState.WAITING));

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
export const changeDataLoadingStatus = status => ({
  type: CHANGE_DATA_LOADING_STATUS,
  state: status
})