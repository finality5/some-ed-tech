import React, { Component } from "react";
import styled from "styled-components";
import { logout } from "../firebase/authService";
import { Button, Icon } from "semantic-ui-react";
const UserInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  padding: 1.5rem 1.5rem 2rem 2rem;
  right: 0;
  top: 0;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0px 0px 5px black;
  transition: 1s;
  transform: translateY(-75%);
  background: #95a5a6;
  z-index: 1;
  /* @media (max-width: 800px) {
    width: 70%;
  } */
  :hover {
    transform: translateX(0);
    background: white;
  }
`;
const StyledDisplayName = styled.p`
  max-width: 20rem;
  word-wrap: break-word;
  margin: 0rem 3rem 0rem 0rem;
  font-size: 1.1em;
  font-weight: 500;
  padding: 0.5rem;
  box-shadow: 0px 0px 10px black;
  border-radius: 0.75rem;
  @media (max-width: 800px) {
    font-size: 0.75em;
    margin: 0rem 1rem 0rem 0rem;
  }
`;
// const StyledRank = styled.p`
//   max-width: 20rem;
//   padding: 0.5rem;
//   display: block;
//   word-wrap: break-word;
//   margin: 0rem 3rem 0rem 0rem;
//   font-size: 1.1em;
//   font-weight: 500;
//   box-shadow: 0px 0px 10px #8e44ad;
//   border-radius: 0.75rem;
//   @media (max-width: 800px) {
//     font-size: 0.75em;
//     margin: 0rem 1rem 0rem 0rem;
//   }
// `;
const StyledButton = styled(Button)`
  @media (max-width: 800px) {
    &.button {
      font-size: 0.75em;
    }
  }
`;
class UserInformation extends Component {
  state = {};

  handleSignIn = () => {
    window.location = "/login";
  };
  render() {
    const { displayName } = this.props;
    return displayName ? (
      <UserInformationBox>
        <StyledDisplayName>Logged In As : {displayName}</StyledDisplayName>
        {/* <StyledRank>
          Rank : Platinum &nbsp;
          <Icon name="chess queen" />
        </StyledRank> */}
        <StyledButton
          style={{
            alignSelf: "center",
            marginRight: "1rem",
          }}
          color="linkedin"
          onClick={() => {
            window.location = "./stat";
          }}
        >
          Statistics
        </StyledButton>
        <StyledButton
          style={{ alignSelf: "center" }}
          color="red"
          onClick={logout}
        >
          Logout
        </StyledButton>
        <Icon
          name="angle down"
          style={{
            position: "absolute",
            right: "0.5rem",
            bottom: "0.5rem",
            color: "white",
          }}
        />
      </UserInformationBox>
    ) : (
      <UserInformationBox>
        <Button
          style={{ alignSelf: "flex-start" }}
          color="green"
          onClick={this.handleSignIn}
        >
          Login
        </Button>
        <Icon
          name="angle down"
          style={{
            position: "absolute",
            right: "0.5rem",
            bottom: "0.5rem",
            color: "white",
          }}
        />
      </UserInformationBox>
    );
  }
}

export default UserInformation;
