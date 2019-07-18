import React, { Component } from 'react'
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super();

        this.state = {
            error: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handling login submit");
        const { email, password } = this.state;
        try {
            const res = await axios.post('https://retroapi.hackeryou.com/api/users/login', {
                email: email,
                password: password
            });

            const token = res.data.user.token;
            this.props.setToken(token);

        } catch (e) {
            const errorMsg = e.response.data.errors[0].msg;

            this.setState({
                error: errorMsg
            })
        }
    }

    render() {
        return (
            <div className="register-login">
                <h2>Login</h2>
                {
                    this.state.error ?
                        <p>{this.state.error}</p>
                        :
                        <p>Login to view documentation.</p>
                }

                <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="example@email.com" onChange={this.handleChange} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" placeholder="********" onChange={this.handleChange}/>
                    </div>

                    <input type="submit" value="login" />
                    <button onClick={this.props.showRegister}>Need account?</button>
                </form>
            </div>
        )
    }
}
export default Login;
