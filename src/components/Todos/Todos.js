import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteTodo } from "../../ducks/todosReducer";

class Todos extends Component {
  render() {
    console.log(this.state);
    let { todos, deleteTodo } = this.props;
    let allTodos = todos.map((e, i) => {
      return (
        <div key={i}>
          <h4>{e}</h4>
          <button onClick={() => deleteTodo(e)}>X</button>
        </div>
      );
    });
    return <div>{allTodos}</div>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { deleteTodo }
)(Todos);
