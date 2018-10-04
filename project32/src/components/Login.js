import React, { Component } from 'react';
import { Errors } from './Errors';
import './Login.css';
import { InputAdornment } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { RemoveRedEye } from '@material-ui/icons';

class Login extends Component {
    state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
      passwordIsMasked: true,
      errors: {email: '', password: ''}
    }

render () {
    return (
      <div className="form">
      <form>
        <h2 className="login">Login</h2>
        <Errors errors={this.state.errors} />
        <div className={`form-group ${this.errorClass(this.state.errors.email)}`}>
          <label className="email"/>
          <input type="email" name="email" placeholder=" Email" value={this.state.email} onChange={this.handleChange}/>
        </div> <br/>
        <div className={`form-group ${this.errorClass(this.state.errors.password)}`}>
        
        
        {/* <label className="password"/>
          <input type="password" name="password" placeholder=" Password" value={this.state.password} onChange={this.handleChange}  /> */}
        {/* <input type="password" id="pwd" placeholder = " Password" value= {this.state.password} onChange = {this.handleChange{}}> */}

        <TextField
        type={this.state.passwordIsMasked ? 'password' : 'text'} name="password" placeholder=" Password" value ={this.state.password} onChange={this.handleChange}
        InputProps={{endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye onClick={this.togglePasswordMask}/>
            </InputAdornment>
        )}}/>
        </div><br/>


        <div className= "remember-email">
          <input type ="checkbox"></input><span>Remember email</span> 
        </div><br/>
        <button type="submit" className="submit" disabled={!this.state.formValid}>Login</button>
      </form>
    </div>
    )
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
        [name]: value
    },
    () => { this.validateField(name, value) });
  }

  togglePasswordMask = () => {
    this.setState(prevState => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

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
        errors.password = passwordValid ? '':'Password must be more than 8 characters, including 1 number'
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
}
export default Login;