import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styling/Login.css'
import { Errors } from './Errors';

class Login extends Component {
    state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
      passwordIsHidden: true,
      errors: {email: '', password: ''}
    }

render () {
    return (

      <div className="form">
      <form>
        <h2 className="login">Login</h2>
        <Errors errors={this.state.errors} />

        <div>
          <label className="email"/>
          <input type="email" name="email" placeholder=" Email" value={this.state.email} onChange={this.handleChange}/>
        </div><br/>

        <div className='form-group'>
          <label/>
          <input type="password" id="pwd" ref="pwd" name="password" placeholder=" Password" value={this.state.password} onChange={this.handleChange}/>
          <span onClick={this.togglePassword} className={this.state.passwordIsHidden ? "glyphicon glyphicon-eye-open" : "glyphicon glyphicon-eye-close"}></span>
        </div><br/>

        <div className= "remember-email">
          <input type ="checkbox"></input><span>Remember email</span> 
        </div><br/>

        <button type="submit" className="submit" disabled={!this.state.formValid}>Login</button>
      </form>
    </div>
    )
  }

  togglePassword = () => {
    let pwd = ReactDOM.findDOMNode(this.refs.pwd);
    if (pwd.type === "password") {
        pwd.type = "text";
        this.setState ({
          passwordIsHidden: false
        })
    } else {
        pwd.type = "password";
        this.setState ({
          passwordIsHidden: true
        })
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
        [name]: value
    },
    () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let errors = this.state.errors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errors.email = emailValid ? '' : 'Please enter a valid email address';
        break;
      case 'password':
        passwordValid = value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ;
        errors.password = passwordValid ? '':'Password must contain: Min 8 characters, at least 1 number, 1 uppercase and 1 lowercase character';
        break;
        default:
        break;
    }
    this.setState({
        errors: errors,
        emailValid: emailValid,
        passwordValid: passwordValid
    }, this.validateForm());
  }

  validateForm() {
    this.setState({
        formValid: this.state.emailValid && this.state.passwordValid});
  }
}

export default Login;