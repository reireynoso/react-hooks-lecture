import React from 'react';
import '../App.css';
import Form from './Form'
import UserInfo from './UserInfo'

class App extends React.Component{
  state = {
    editMode: false,
    user: {
      username: "Ayeeeeee-ric",
      bio: "Ayeeeee. I like fortniteeeez. xoxoxo"
    }
  }

  handleReplaceUserInfo = (newUser) => {
    this.setState({
      editMode: false,
      user: newUser
    })
  }

  handleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render(){
    return (
      <div className="App">
        {
          this.state.editMode ? 
          <Form user = {this.state.user} handleReplaceUser={this.handleReplaceUserInfo}/>
          :
          <UserInfo user={this.state.user}/>
        }
        <button onClick={this.handleEditMode}>{this.state.editMode ? "Go Back" : "Edit"}</button>
      </div>
    )
  }
}
export default App;
