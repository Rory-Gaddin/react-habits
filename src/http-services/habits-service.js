import axios from 'axios';

const habitsService = axios.create({
  baseURL: 'https://react-habits.firebaseio.com/'
});

export default habitsService