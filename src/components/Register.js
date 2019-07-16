import React, { Component } from 'react'
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super();

        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handling register submit");

    }

    render() {
        return (
            <div className="register-login">
                <h2>Register</h2>
                <p>Register to receive an API key.</p>

                <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="example@email.com"/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" placeholder="supersecret" />
                    </div>

                    <input type="submit" value="submit"/>
                    <button onClick={this.props.showLogin}>Login</button>
                </form>
            </div>
        )
    }
}
export default Register;