import * as habitActions from '../actions/habit.actions';
// import habitsService from './../../http-services/habits-service';

export const HabitDisplayState = {
  SHOW_HABIT_LIST: 'show-habits',
  NEW_HABIT: 'new-habit'
}

export const DataLoadingState = {
  LOADING: 'loading',
  WAITING: 'waiting'
}

const dataLoadingOperations = {};

const initialState = {
  habits: [],
  displayState: HabitDisplayState.SHOW_HABIT_LIST,
  dataLoadingState: DataLoadingState.IDLE
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case habitActions.REQUEST_NEW_HABIT_FORM: return requestNewHabitForm(state, action);
    case habitActions.REFRESH_HABIT_LIST: return refreshHabitList(state, action);
    case habitActions.SAVE_HABIT: return saveHabit(state, action);
    case habitActions.CHANGE_DISPLAY_STATE: return changeDisplayState(state, action);
    case habitActions.CHANGE_DATA_LOADING_STATUS: return changeDataLoadingStatus(state, action);

    default:
    if (Object.keys(habitActions).find(action => action === action.type)) {
      // This is defined as an action for this reducer, but we haven't handled that case
      throw new Error(`Unhandled Habit action "${action.type} in Habit Reducer!"`);
    }
  }

  return state;
}

export default reducer;

/** 
 * Private methods
 */

const sortHabits = (a, b) => a.name.localeCompare(b.name)

const changeDataLoadingStatus = (state, action) => {
  if (!Object.keys(DataLoadingState).find(state => DataLoadingState[state] === action.state)) {
    throw new Error(`The data loading state "${action.state}" is not recognized`)
  }
  if (!action.operation) throw new Error(`Must specify the operation when calling changeDataLoadingStatus`)

  if (action.state === DataLoadingState.LOADING) {
    dataLoadingOperations[action.operation] = true;
  } else {
    delete dataLoadingOperations[action.operation]
  }

  const overallState = Object.keys(dataLoadingOperations).length > 0
  ? DataLoadingState.LOADING
  : DataLoadingState.WAITING

  return {...state,
    dataLoadingState: overallState
  }
}

const requestNewHabitForm = (state, action) => {
  return {...state, 
    displayState: HabitDisplayState.NEW_HABIT
  }
}

const refreshHabitList = (state, action) => {
  return {...state,
    habits: action.habits.sort(sortHabits)
  }
}

const saveHabit = (state, action) => {
  return {...state,
    habits: state.habits.concat(action.habit).sort(sortHabits)
  }
}

const changeDisplayState = (state, action) => {
  if (!Object.keys(HabitDisplayState).find(state => HabitDisplayState[state] === action.displayState)) {
    throw new Error(`The display state "${action.displayState}" is not recognized`)
  }
  return {...state,
    displayState: action.displayState
  }
}