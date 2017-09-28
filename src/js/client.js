import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Todos from "./pages/Todos";
import Layout from "./pages/Layout";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
// <Route path="edit_user/:id" component={EditUser}></Route>
// <Route name="edit_user" path="/:id" handler={EditUser} />


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="edit_user" component={EditUser}></Route>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="add_user" component={AddUser}></Route>
      <Route path="edit_user/:id" component={EditUser}></Route>


    </Route>
  </Router>,
app);
