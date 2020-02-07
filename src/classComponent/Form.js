import React, { Component } from 'react';

export default class Form extends Component {
  state = {
      username: "",
      password: "",
      bio: ""
  }

  handleOnChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.handleReplaceUser(this.state)
    this.setState({
        username: "",
        password: "",
        bio: ""
    })
  }

  render() {
    return (
      <div>
          <h1>Edit Logged In User</h1>
          <form onSubmit={this.handleOnSubmit}>
              <label>Username</label>
              <input type="text" value={this.state.username} onChange={this.handleOnChange} autoComplete="off" name="username" placeholder="Username"/>
              <label>Password</label>
              <input type="text" value={this.state.password} onChange={this.handleOnChange} autoComplete="off" name="password" placeholder="Password"/>
              <label>Bio</label>
              <input type="text" value={this.state.bio} onChange={this.handleOnChange} autoComplete="off" name="bio" placeholder="Bio"/>
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}
