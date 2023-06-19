import React, { Component } from 'react';
import '../App.css';
import Overview from './Overview';
import EditForm from './EditForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      tasks: [],
      inputEditValue: '',
      taskEditNumber: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleEditChange(e) {
    this.setState({
      inputEditValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newArray = this.state.tasks.concat(this.state.inputValue);
    this.setState({
      inputValue: '',
      tasks: newArray
    });
  }

  handleDelete(e) {
    e.preventDefault();
    const taskIdx = e.target.parentElement.children[0].innerText;
    const newArr = this.state.tasks;
    newArr.splice(taskIdx, 1);
    this.setState({
      tasks: newArr
    });
  }

  handleEdit(e) {
    e.preventDefault();
    const inputEdit = document.getElementById('input-edit');
    const taskIdx = e.currentTarget.parentElement.children[0].innerText;
    inputEdit.disabled = false;
    this.setState({
      inputEditValue: this.state.tasks[taskIdx],
      taskEditNumber: taskIdx
    });
  }

  editTask(e) {
    e.preventDefault();
    const inputEdit = document.getElementById('input-edit');
    const newArr = this.state.tasks;
    newArr.splice(this.state.taskEditNumber, 1, this.state.inputEditValue);
    inputEdit.disabled = true;
    this.setState({
      tasks: newArr,
      inputEditValue: '',
      taskEditNumber: 0
    });
  }

  render() {
    return (
      <div className="App">
        <Overview tasks={this.state.tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
        <EditForm handleEditChange={this.handleEditChange} inputEditValue={this.state.inputEditValue} editTask={this.editTask} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='task'>Task Name:</label>
          <input type="text" id='task' name='task' placeholder='Clean the basement, wash the bathtub...' onChange={this.handleChange} value={this.state.inputValue} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
