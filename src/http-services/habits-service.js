import axios from 'axios';

const habitsService = axios.create({
  baseURL: 'https://react-habits.firebaseio.com/'
});

habitsService.saveHabit = async habit => {
  const isNew = !habit.id;

  if (isNew) {
    const resp = await habitsService.post('user/rory-gaddin/habits.json', habit);
    habit.id = resp.data.name;  // Get the name of the document from Firebase and use it as the ID
    return habit;
  } else {
    const resp = await habitsService.patch(`user/rory-gaddin/habits/${habit.id}.json`, habit);
    return resp.data;
  }
};

habitsService.getAllHabits = async () => {
  const habitData = (await habitsService.get('user/rory-gaddin/habits.json')).data;
  const habits = habitData
  ? Object.keys(habitData)
    .map(key => { 
      const habit = habitData[key]; 
      habit.id = key; 
      return habit;
    })
  : [];

  return habits;
}

export default habitsService