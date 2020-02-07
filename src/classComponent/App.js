import React from 'react';
import '../App.css';
import WelcomeComponent from './WelcomeComponent'
import Form from './Form'

class App extends React.Component{
  state = {
    user: {}
  }
  render(){
    return (
      <div className="App">
        <WelcomeComponent user={this.state.user}/>
        <Form/>
      </div>
    )
  }
}
export default App;
