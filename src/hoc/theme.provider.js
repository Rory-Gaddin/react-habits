import React, { Component } from 'react';
import { ThemeContext } from './../contexts/theme.context';

export class ThemeProvider extends Component {
  render() {
    return (
      <ThemeContext.Provider value={this.props.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
