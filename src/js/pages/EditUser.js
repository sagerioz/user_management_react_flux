import React from "react";
import EditUser from '../components/EditUser'
import TextFieldGroup from '../common/TextFieldGroup';
import TrashUserRecord from '../buttons/deleteBtn.js';
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class AddUser extends React.Component {
  render() {
    const { userID, id, text, complete, edit, first_name, last_name, address, city, state, zip } = this.props;
   console.log("from edit page", userID);
    return (
      <div>
      <h3> Edit/Delete User {id}</h3>
      <EditUser />
      </div>
    );
  }
}
