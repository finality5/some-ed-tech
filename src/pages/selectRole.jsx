import React, { Component } from "react";
import styled from "styled-components";

import { Role } from "../components/roleComponents/role";
import UserInformation from "../components/userInformation";
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
    displayName: "",
    showLoading: false,
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "darkTheme";
  }

  componentWillReceiveProps({ user }) {
    this.setState({
      displayName: user,
    });
  }
  handleClickInstructor = () => {
    window.location = "/room";
  };
  handleClickAudience = () => {
    window.location = "/room";
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
        <UserInformation displayName={this.state.displayName} />
      </ContentBox>
    );
  }
}

export default SelectRole;
