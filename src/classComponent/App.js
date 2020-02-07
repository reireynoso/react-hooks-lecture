import React from 'react';
import '../App.css';
import WelcomeComponent from './WelcomeComponent'
import Form from './Form'

class App extends React.Component{
  state = {
    user: {
      username: "AyeeeeeeRic",
      password: "gen-z",
      bio: "Holla at yo boi, Eric. Ayeeeee. I like fortniteeeez."
    }
  }

  handleReplaceUser = (newUser) => {
    this.setState({
      user: newUser
    })
  }

  render(){
    return (
      <div className="App">
        <WelcomeComponent user={this.state.user}/>
        <Form handleReplaceUser={this.handleReplaceUser}/>
      </div>
    )
  }
}
export default App;
