import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) this.props.handleLogin(this.state)
    
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              onChange={this.handleInputChange}
              id="username" 
              name="username" 
              type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              onChange={this.handleInputChange}
              id="password" 
              name="password" 
              type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
