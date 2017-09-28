import React from "react";
import AddNewUser from '../components/AddNewUser';
import EditUser from '../components/EditUser';
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
// 'import * as' is a clean way to import and define all of your functions. It will show up here in an object literal.
// ex)
// {
//    createTodo: function() {}
//    deleteTodo: function() {}
// }
import TodoStore from "../stores/TodoStore";


export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      editId: 0,
    };
  }

  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {

        return <Todo key={todo.id} {...todo} />;
    });

    return (


      <div className="container">

        <h1>User List</h1>
        <ul>{TodoComponents}</ul>

        <button type="button" className="button-logo-2" data-toggle="modal" data-target="#AddModal">
        Add User
        </button>




      </div>
    );
  }
}
