import React, { Component } from 'react'

export default class Habit extends Component {
  render() {
    return (
      <div>
        {this.props.habit.name}
      </div>
    )
  }
}
