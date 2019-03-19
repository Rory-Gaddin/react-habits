import React, { Component } from 'react';
import './App.css';
import HabitList from './containers/HabitList/HabitList';
import * as themes from './themes/themes';
import { ThemeContext } from './contexts/theme.context';

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.currentTheme}}>
        <div className="App">
          <HabitList></HabitList>
        </div>
      </ThemeContext.Provider>
    );
  }

  state = {
    currentTheme: themes.darkTheme
  }
}

export default App;
