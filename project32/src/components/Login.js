import React, { Component } from 'react';
import { Errors } from './Errors';
import './Login.css';

class Login extends Component {
    state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
      errors: {email: '', password: ''}
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
        passwordValid = value.length >=8 && value.match(/[\d]/g) ;
        errors.password = passwordValid ? '':'Password must be more than 8 characters and include at least 1 number'
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

  errorClass(error) {
    return(error.length === 0 ? '' : 'hasError');
  }

  render () {
    return (
      <form className="form">
        <h2>Login</h2>
        <Errors errors={this.state.errors} />
        <div className={`form-group ${this.errorClass(this.state.errors.email)}`}>
          <label htmlFor="email"/>
          <input type="email" name="email" placeholder="email"value={this.state.email} onChange={this.handleChange}/>
        </div>
        <div className={`form-group ${this.errorClass(this.state.errors.password)}`}>
          <label htmlFor="password"/>
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}  />
        </div>
        <button type="submit" className="submit" disabled={!this.state.formValid}>Login</button>
      </form>
    )
  }
}
export default Login;