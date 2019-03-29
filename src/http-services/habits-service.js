import axios from 'axios';

const habitsService = axios.create({
  baseURL: 'https://react-habits.firebaseio.com/'
});

habitsService.saveHabit = habit => habitsService.post('user/rory-gaddin/habits.json', habit);
habitsService.getAllHabits = async () => {
  const habitData = (await habitsService.get('user/rory-gaddin/habits.json')).data;
  const habits = habitData
  ? Object.keys(habitData).map(key => habitData[key])
  : [];

  return habits;
}

export default habitsService