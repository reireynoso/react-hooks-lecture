import React, { Component } from 'react';

export default class UserInfo extends Component {
  render() {
    const {username, bio} = this.props.user
    return (
      <div>
          <fieldset>
              <legend>About Me</legend>
              <p><b>Username: </b>{username}</p>
              <p><b>Bio: </b>{bio}</p>
          </fieldset>
      </div>
    );
  }
}
