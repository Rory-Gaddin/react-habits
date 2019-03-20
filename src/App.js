import React, { Component } from 'react';
import './App.css';
import HabitList from './containers/HabitList/HabitList';
import * as themes from './themes/themes';
import { ThemeContext } from './contexts/theme.context';
import getThemeStyles from './helpers/style.helper';

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.currentTheme}}>
        <ThemeContext.Consumer>{themeCtx => (<React.Fragment>
          <header className={getThemeStyles('background.highlight10Perc', themeCtx, 'HabitHeader')}>
            <nav>
              <h3 className={getThemeStyles(['text.againstPrimaryBg', 'text.heading'], themeCtx)}>Uptick</h3> 
            </nav>
          </header>
          <div className="App">
            <HabitList></HabitList>
          </div>
        </React.Fragment>)}</ThemeContext.Consumer>
      </ThemeContext.Provider>
    );
  }

  state = {
    currentTheme: themes.lightTheme
  }
}

export default App;
