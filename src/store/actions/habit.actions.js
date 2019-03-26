export const REQUEST_NEW_HABIT_FORM = 'request-new-habit-form';
export const requestNewHabitForm = () => ({
  type: REQUEST_NEW_HABIT_FORM
})

export const REFRESH_HABIT_LIST = 'refresh-list';
export const refreshHabitList = () => ({
  type: REFRESH_HABIT_LIST
})

export const SAVE_HABIT = 'save-habit';
export const saveHabit = habit => dispatch => {
  setTimeout(() => 
    dispatch({
      type: SAVE_HABIT,
      habit: habit
    }), 
    2000
  );
};

export const CHANGE_DISPLAY_STATE = 'change-display-state';
export const changeDisplayState = newState => ({
  type: CHANGE_DISPLAY_STATE,
  displayState: newState
})