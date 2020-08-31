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
import auth from "./firebase";
class App extends Component {
  state = { user: "" };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("logged in");
        user
          .getIdToken()
          .then((token) => {
            localStorage.setItem("token", token);
          })
          .catch(() => {
            console.log("cannot set localstorage token");
          });

        this.setState({
          user: user.displayName,
        });
      } else console.log("not logged in yet.");
    });
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login {...props} user={this.state.user} />}
          />
          <Route path="/register" component={Register} />
          <Route path="/verify" component={VerifyEmail} />
          <Route path="/setup-password" component={SetupPassword} />
          <Route
            path="/role"
            render={(props) => <SelectRole {...props} user={this.state.user} />}
          />
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
