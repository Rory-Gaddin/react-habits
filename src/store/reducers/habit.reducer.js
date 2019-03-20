import * as habitActions from '../actions/habit.actions';
// import habitsService from './../../http-services/habits-service';

export const HabitDisplayState = {
  SHOW_HABIT_LIST: 'show-habits',
  NEW_HABIT: 'new-habit'
}

const initialState = {
  habits: [],
  displayState: HabitDisplayState.SHOW_HABIT_LIST
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case habitActions.REQUEST_NEW_HABIT_FORM:
    return {...state, 
      displayState: HabitDisplayState.NEW_HABIT
    }

    case habitActions.REFRESH_HABIT_LIST:
    // TODO: Async implementation here!
    break;

    case habitActions.SAVE_HABIT:
    return {...state,
      habits: state.habits.concat(action.habit),
      displayState: HabitDisplayState.SHOW_HABIT_LIST
    }

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
/* const _getAllHabits = async () => {
  const response = await habitsService.get('/habits');
  const habits = response.data.map(h => ({
    id: h.id,
    name: h.name,
    question: h.question
  }));
  return habits;
} */