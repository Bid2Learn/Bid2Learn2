import React, { Component } from 'react';
import { LoginPage } from './LoginPage';
import { Login, User } from './User';

export class App extends Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  render = (): JSX.Element => {
    return (
      <LoginPage
        onLoginClick={this.doLoginClick}
      />
    )
  }

  doLoginClick = (user: User): void => {
    console.log("Username: " + user.Login.username)
    console.log("Password: " + user.Login.password)
  }
}