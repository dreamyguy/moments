import React, { Component, createContext } from 'react';

const ThemeContext = createContext({
  themeColor: '#bada55',
  changeThemeColor: () => null,
});

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends Component {
  state = {
    themeColor: '#bada55' // defaults to default
  };

  changeThemeColor = (themeColor) => {
    this.setState({themeColor});
  };

  render () {
    return (
      <ThemeContext.Provider
        value={{
          themeColor: this.state.themeColor,
          changeThemeColor: this.changeThemeColor
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

const FrontendContext = createContext({});
const TimeContext = createContext({});