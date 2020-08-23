import React, { Component } from "react";
import styled from "styled-components";
import auth from "../firebase";
import { Role } from "../components/roleComponents/role";
import UserInformation from "../components/roleComponents/userInformation";

import { FlexRow } from "../components/sharedComponents";
const ContentBox = styled(FlexRow)`
  position: relative;
  justify-content: center;
  align-items: center;
`;
const TextHeader = styled.p`
  position: absolute;
  top: 10rem;
  font-size: 2rem;
  font-weight: 400;
  color: whitesmoke;
`;
const RoleArea = styled(FlexRow)`
  position: absolute;
  width: 80%;
  top: 24rem;
  margin-bottom: 12.5rem;
  justify-content: space-evenly;
`;

class SelectRole extends Component {
  state = {
    displayName: "-",
    isLoggedIn: false,
    showLoading: false,
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "darkTheme";
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // console.log(user.getIdToken());
        this.setState({ isLoggedIn: true, displayName });
        console.log("token", user.uid);
      } else {
        console.log("not signed in");
      }
    });
  }
  handleClickInstructor = () => {
    window.location = "/login";
  };
  handleClickAudience = () => {
    window.location = "/login";
  };
  handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        window.location = "/login";
        this.setState({ isLoggedIn: false });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  handleSignIn = () => {
    window.location = "/login";
  };
  render() {
    return (
      <ContentBox>
        <TextHeader>SELECT YOUR ROLE</TextHeader>
        <RoleArea>
          <Role
            onClick={this.handleClickAudience}
            text="AUDIENCE"
            img="graduation"
          />
          <Role
            onClick={this.handleClickInstructor}
            text="INSTRUCTOR"
            img="user"
          />
        </RoleArea>
        <UserInformation
          isLoggedIn={this.state.isLoggedIn}
          displayName={this.state.displayName}
          onLogout={this.handleLogout}
          onSignIn={this.handleSignIn}
        />
      </ContentBox>
    );
  }
}

export default SelectRole;
