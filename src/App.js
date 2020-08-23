import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import SetupPassword from "./pages/setupPassword";
import SelectRole from "./pages/selectRole";
import SelectRoom from "./pages/selectRoom";
import NotFound from "./pages/notFound";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import VerifyEmail from "./pages/verifyEmail";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/verify" component={VerifyEmail} />
          <Route path="/setup-password" component={SetupPassword} />
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
