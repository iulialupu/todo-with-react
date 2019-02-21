import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          type="text"
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoInput;
