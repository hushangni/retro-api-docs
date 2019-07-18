import React, { Component } from 'react'
import axios from 'axios';

class Register extends Component {

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
        console.log("handling register submit");
        const { email, password } = this.state;
        console.log(email, password);
        try {
            const res = await axios.post('https://retroapi.hackeryou.com/api/users/register', {
                email: email,
                password: password
            });

            const token = res.data.token;
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
                <h2>Register</h2>
                {
                    this.state.error ?
                        <p>{this.state.error}</p>
                    :
                        <p>Register to receive an API key.</p>
                }

                <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="example@email.com" onChange={this.handleChange}/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" placeholder="*********" onChange={this.handleChange}/>
                    </div>

                    <input type="submit" value="register"/>
                    <button onClick={this.props.showLogin}>Have account?</button>
                </form>
            </div>
        )
    }
}
export default Register;