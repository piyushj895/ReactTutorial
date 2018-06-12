import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    name:'Piyush'
  }

  changeName = (newName)=>{
    this.setState({
        name:newName
    })
  }

  changeNamefromInput=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        {/* two way binding */}
        <button onClick={() => this.changeName('Jain :(')}>Change State using Anonymous Function</button>
         {/* bind is more effiecent */}
        <button onClick={this.changeName.bind(this, 'Jain :)')}>Change Using Bind</button>
        <br/><br/>
        <input type="text" onChange={this.changeNamefromInput} value={this.state.name}/>
        <br/><br/>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
