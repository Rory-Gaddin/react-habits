import React, { Component } from 'react'
import './HabitConfiguration.css'
import RaisedButton from './../../components/UI/RaisedButton/RaisedButton';
import Input, { InputType } from './../../components/UI/Input/Input';

export default class HabitConfiguration extends Component {
  render() {
    return (
      <div className="HabitConfigurationForm">
        <Input 
          elementType={InputType.SINGLE_LINE_TEXT}
          elementConfig={{ placeholder: 'Habit Title' }}
          changed={this.nameInputHandler}
          value={this.state.name}
        ></Input>
        <Input
          elementType={InputType.SINGLE_LINE_TEXT}
          changed={this.questionInputHandler}
          elementConfig={{ placeholder: 'Question (e.g., Did you ... today?)' }}
          value={this.state.question}
        ></Input>
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
