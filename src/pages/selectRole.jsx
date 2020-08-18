import React, { Component } from "react";
import styled from "styled-components";
import { Role } from "../components/roleComponents/role";
import { FlexRow } from "../components/sharedComponents";
const OutSideBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const TextHeader = styled.p`
  position: absolute;
  top: 20%;
  font-size: 2rem;
  font-weight: 400;
  color: whitesmoke;
`;
const RoleArea = styled(FlexRow)`
  width: 80%;
  justify-content: space-evenly;
`;
class SelectRole extends Component {
  state = {
    showLoading: false,
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "darkTheme";
  }
  handleClickInstructor = () => {
    window.location = "/login";
    // this.props.history.push("/login");
  };
  handleClickAudience = () => {
    window.location = "/login";
    // this.props.history.push("/login");
  };
  render() {
    return (
      <OutSideBox>
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
      </OutSideBox>
    );
  }
}

export default SelectRole;
