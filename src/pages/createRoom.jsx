import React, { Component } from "react";
import NavBar from "../components/navBar";
import UserInformation from "../components/userInformation";
import { Button } from "semantic-ui-react";
class CreateRoom extends Component {
  state = {
    displayName: "",
    roomDetails: {
      topic: "",
      time: "",
      additionalQuestions: {},
      activities: {},
    },
  };
  componentWillReceiveProps({ user }) {
    this.setState({
      displayName: user,
    });
  }
  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.displayName} />
        <UserInformation displayName={this.state.displayName} />
        <div
          style={{
            marginTop: "10rem",
            height: "500px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              border: "solid 2px black",
              width: "500px",
              padding: "2rem",
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Create Room Form</h2>
            <div>Topic</div> <div>Time</div> <div>Activites</div>
            <div>Additional Questions</div>
            <Button
              color="red"
              style={{ alignSelf: "center" }}
              onClick={() => {
                window.location = "./room";
              }}
            >
              Create Room !
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRoom;
