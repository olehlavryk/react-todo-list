import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoItems : todosData
    }
  }
  
  handleChange = id => {
    const index = this.state.todoItems.map(item => item.id).indexOf(id);
    this.setState(state => {
        let {todoItems} = state;
        if(todoItems[index].complited === false) {
          todoItems[index].complited = true;
        } else {
          todoItems[index].complited = false;
        }
        

        return todoItems;
    });
  }

  render() {
    
    const {todoItems} = this.state;
    const activeTasks = todoItems.filter(task => task.complited === false);
    const complitedTasks = todoItems.filter(task => task.complited === true);

    const finalTasks = [...activeTasks, ...complitedTasks].map(item => {
      return (
        <ToDoItem 
          key={item.id}
          description={item.description}
          complited={item.complited}
          handleChange={() => {this.handleChange(item.id)}}
        />
      )
    });

    return (
      <div className="App">
        <h1>React todo list</h1>
        <ul className="todo-list">
          {finalTasks}
        </ul>
      </div>
    )
  }
}

export default App;
