import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./pages/login";
import SelectRole from "./pages/selectRole";
import SelectRoom from "./pages/selectRoom";
import NotFound from "./pages/notFound";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/role" component={SelectRole} />
          <Route path="/room" component={SelectRoom} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/role" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
