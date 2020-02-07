import React, { Component } from 'react';

export default class Form extends Component {
  state = {
      username: "",
      password: "",
      bio: ""
  }

  render() {
    return (
      <div>
          <h1>Edit Logged In User</h1>
          <form>
              <label>Username</label>
              <input type="text" autoComplete="off" name="username" placeholder="Username"/>
              <label>Password</label>
              <input type="text" autoComplete="off" name="password" placeholder="Password"/>
              <label>Bio</label>
              <input type="text" autoComplete="off" name="bio" placeholder="Bio"/>
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}
