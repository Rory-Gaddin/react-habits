import React, { Component } from 'react';
import './App.css';
import HabitList from './containers/HabitList/HabitList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HabitList></HabitList>
      </div>
    );
  }
}

export default App;
