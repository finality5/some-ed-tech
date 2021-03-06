import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CreateRoom from "./pages/createRoom";
import Login from "./pages/login";
import Lecture from "./pages/lecture";
import Register from "./pages/register";
import SelectRole from "./pages/selectRole";
import SelectRoom from "./pages/selectRoom";
import Statistics from "./pages/statistics";
import NotFound from "./pages/notFound";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
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
      } else {
        this.setState({
          user: "",
        });
        console.log("not logged in yet.");
      }
    });
  }
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          render={(props) => <Login {...props} user={this.state.user} />}
        />
        <Route path="/register" component={Register} />
        <Route
          path="/role"
          render={(props) => <SelectRole {...props} user={this.state.user} />}
        />
        <Route
          path="/createroom"
          render={(props) => <CreateRoom {...props} user={this.state.user} />}
        />
        <Route
          path="/room"
          render={(props) => <SelectRoom {...props} user={this.state.user} />}
        />

        <Route
          path="/lecture"
          render={(props) => <Lecture {...props} user={this.state.user} />}
        />

        <Route
          path="/stat"
          render={(props) => <Statistics {...props} user={this.state.user} />}
        />
        {/* <Route
          path="/stat"
          render={(props) => {
            if (!this.state.user) return <Redirect to="/login" />;
            return <Statistics {...props} user={this.state.user} />;
          }}
        /> */}
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/role" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
