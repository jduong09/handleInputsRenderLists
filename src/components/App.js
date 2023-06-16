import React, { Component } from 'react';
import '../App.css';
import Overview from './Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      tasks: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newArray = this.state.tasks.concat(this.state.inputValue);
    this.setState({
      inputValue: '',
      tasks: newArray
    });
  }

  render() {
    return (
      <div className="App">
        <Overview tasks={this.state.tasks} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='task'>Task Name:</label>
          <input type="text" id='task' name='task' placeholder='Clean the basement, wash the bathtub...' onChange={this.handleChange} value={this.state.value} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
