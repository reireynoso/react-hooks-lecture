import React, { Component } from 'react';

export default class UserInfo extends Component {
  render() {
    const {username, bio} = this.props.user
    return (
      <div>
          <h1>Profile</h1>
          <fieldset>
              <legend>About Me</legend>
              <p><b>Username: </b>{username}</p>
              <p><b>Bio: </b>{bio}</p>
          </fieldset>
      </div>
    );
  }
}
