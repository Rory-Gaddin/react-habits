import React, { Component } from 'react'
import './HabitConfiguration.css'
import RaisedButton from './../../components/UI/RaisedButton/RaisedButton';

export default class HabitConfiguration extends Component {
  render() {
    return (
      <div>
        <input 
          type="text" 
          onInput={this.nameInputHandler}
          placeholder="Name"
          value={this.state.name}
        ></input>
        <input 
          type="text" 
          onInput={this.questionInputHandler}
          placeholder="Question (e.g., Did you ... today?)"
          value={this.state.question}
        ></input>
        <RaisedButton
          disabled={!this.formIsValid}
          onClick={this.saveHandler}
        >Save Habit</RaisedButton>
      </div>
    )
  }

  state = {
    name: this.props.habit ? this.props.habit.name : '',
    question: this.props.habit ? this.props.habit.question : ''
  }

  /** 
   * UI Event handlers
   */

  nameInputHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  questionInputHandler = (event) => {
    this.setState({ question: event.target.value })
  }

  saveHandler = () => {
    if (this.formIsValid) {
      this.props.onSave({
        name: this.state.name,
        question: this.state.question
      })
    }
  }

  /** 
   * Private methods
   */

  formIsValid = () => {
    return !!this.state.name
  }
}
