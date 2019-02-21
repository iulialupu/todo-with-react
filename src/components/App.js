import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import Filters from "./Filters";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      selectedFilter: "All"
    };
  }

  onSubmit = text => {
    const newItem = {
      id: Date.now(),
      text,
      isCompleted: false
    };
    this.setState(prevState => ({ todos: [...prevState.todos, newItem] }));
  };

  handleCheckboxChange = id => {
    this.setState(prevState => {
      const upadatedTodo = prevState.todos.map(item => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      return { todos: upadatedTodo };
    });
  };

  handleFilterClick = filter => {
    this.setState({ selectedFilter: filter });
  };

  renderTodoes() {
    let filteredList = [];
    if (this.state.selectedFilter === "Completed") {
      filteredList = this.state.todos.filter(item => item.isCompleted);
      console.log(filteredList);
    } else if (this.state.selectedFilter === "Active") {
      filteredList = this.state.todos.filter(item => !item.isCompleted);
      console.log(filteredList);
    } else {
      filteredList = this.state.todos;
      console.log(filteredList);
    }
    return filteredList.map(item => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          handleCheckboxChange={this.handleCheckboxChange}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="app-header">To Do List</h1>
        <Filters
          handleClick={this.handleFilterClick}
          filter={this.state.selectedFilter}
        />
        <div className="todo-list">{this.renderTodoes()}</div>
        <TodoInput onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
