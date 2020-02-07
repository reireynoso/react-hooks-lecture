import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    user: {}
  }
  render(){
    return (
      <div className="App">
        <label>Page Number</label>
        <select>
          <option>Select</option>
          {this.state.pageNumArr.map(pageNum => <option>{pageNum}</option>)}
        </select>
      </div>
    )
  }
}
export default App;
