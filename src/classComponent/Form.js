import React, { Component } from 'react';

export default class Form extends Component {
  state = {
      username: "",
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
        bio: ""
    })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleOnSubmit}>
              <fieldset>
                <legend>Edit User</legend>
                <label>Username</label>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleOnChange} 
                    autoComplete="off" name="username" 
                    placeholder="Username"
                    required
                />
                <label>Bio</label>
                <input 
                    type="text" 
                    value={this.state.bio} 
                    onChange={this.handleOnChange} 
                    autoComplete="off" 
                    name="bio" 
                    placeholder="Bio"
                    required
                />
                <input type="submit" value="Submit"/>
              </fieldset>
          </form>
      </div>
    );
  }
}
