import React from 'react';
import '../App.css';
import Form from './Form'
import UserInfo from './UserInfo'

class App extends React.Component{
  state = {
    user: {
      username: "Ayeeeeee-ric",
      bio: "Ayeeeee. I like fortniteeeez. xoxoxo"
    }
  }


  handleReplaceUserInfo = (newUser) => {
    this.setState({
      user: newUser
    })
  }

  render(){
    return (
      <div className="App">
        <Form handleReplaceUser={this.handleReplaceUserInfo}/>
        <UserInfo user={this.state.user}/>
      </div>
    )
  }
}
export default App;
