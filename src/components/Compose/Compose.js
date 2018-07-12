import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo } from "../../ducks/todosReducer";

class Compose extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleInput = val => {
    this.setState({
      newTodo: val
    });
  };

  render() {
    let { newTodo } = this.state;
    let { addTodo } = this.props;
    return (
      <div>
        <input
          placeholder="Type New Todo"
          onChange={e => this.handleInput(e.target.value)}
        />
        <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { addTodo }
)(Compose);
