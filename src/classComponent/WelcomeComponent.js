import React, { Component } from 'react';

export default class WelcomeComponent extends Component {
//   state = {
//       username: ""
//   }
//   componentDidMount(){
//      this.setState({
//          username: this.props.user.username
//      })
//   }

  render() {
    return (
      <div>
          <h1>How's it goin' {this.props.user.username}!</h1>
      </div>
    );
  }
}
