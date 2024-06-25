import React, { ChangeEvent, MouseEvent , Component } from "react";
import { Login, User } from "./User";
import { loginResult, loginUser } from "./serverDUM";

type LoginPageProps = {
    onLoginClick: (user: User) => void,
    //onSignUpClick: () => void
}

type LoginPageState = {
    username: string,
    password: string,
    error: string
}

export class LoginPage extends Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props)
        this.state = {username: "", password: "", error: ""}
    }
    
    render = (): JSX.Element => {
        return (
            <div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" onChange={this.doUsernameChange} id="username"></input>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" onChange={this.doPasswordChange} id="password"></input>
                </div>
                {this.renderError()}
                <button type="button" onClick={this.doLoginClick}>Login</button>
            </div>
        )
    }
    
    renderError = (): JSX.Element => {
        return (<div>
            {this.state.error}
        </div>);
    }

    doUsernameChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        this.setState({username: evt.target.value})
    }

    doPasswordChange = (evt: ChangeEvent<HTMLInputElement>): void => {
        this.setState({password: evt.target.value})
    }

    doLoginClick = (evt: MouseEvent<HTMLButtonElement>): void => {
        loginUser({password: this.state.password, username: this.state.username}, this.loginCallback)
    }

    loginCallback = (output: loginResult): void => {
        if (output === "Username doesn't exist") {
            this.setState({error: output})
        } else if (output === "Wrong Password") {
            this.setState({error: output})
        } else {
            this.setState({error: ""})
            this.props.onLoginClick(output)
        }
    }
}