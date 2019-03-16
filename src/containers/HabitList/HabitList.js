import React, { Component } from 'react'
import Habit from './../Habit/Habit';

export default class HabitList extends Component {
  render() {
    return (
      <div>
        <header className="HabitHeader">
          <nav>
            <h1>Welcome to React Habits</h1>
          </nav>
        </header>
        <div className="HabitListContainer">
        {
          this.state.habits.map(h => 
            <Habit habit={h} />
          )
        }
        </div>
      </div>
    )   
  }

  state = {
    habits: []
  }

  /** 
   * Lifecycle hooks
   */

  componentDidMount() {
    this.setState({
      habits: [
        { id: 'ABCD', name: 'Mow the lawn', question: 'Did you mow the lawn this week?'},
        { id: 'DEF', name: 'Shave your beard', question: 'Did you shave your beard in the last few days?'},
        { id: 'XYZ', name: 'Say something nice to someone', question: 'Have you been decent...upstanding?!'},
      ]
    })
  }
}
