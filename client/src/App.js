import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };

  componentDidMount(){
axios.get('/api').then((res) => {
  const response = res.data;
  console.log("this is the:",response)
  this.setState({response});
  console.log(response)
});
  }

  render(){
    return (
      <div className="App">
        <h1>Hello from the frontend</h1>
        <h2>{this.state.response.body}</h2>
          
      </div>
    );
  }
  
}

export default App;
