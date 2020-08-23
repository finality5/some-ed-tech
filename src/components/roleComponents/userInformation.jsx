import React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
const UserInformationBox = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 3rem;
  top: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px white;
  padding: 1rem;
`;
const StyledDisplayName = styled.p`
  :first-child {
    margin: 0.2rem 3rem 0rem 0rem;
    font-size: 1.25em;
    font-weight: 500;
    color: white;
  }
`;
const UserInformation = ({ isLoggedIn, displayName, onLogout, onSignIn }) => {
  return isLoggedIn ? (
    <UserInformationBox>
      <StyledDisplayName>Logged In As : {displayName}</StyledDisplayName>
      <Button color="red" onClick={onLogout}>
        LOGOUT
      </Button>
    </UserInformationBox>
  ) : (
    <UserInformationBox>
      <Button color="green" onClick={onSignIn}>
        SIGN IN
      </Button>
    </UserInformationBox>
  );
};

export default UserInformation;
