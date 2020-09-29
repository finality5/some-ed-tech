import React, { Component } from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import { logout } from "../firebase/authService";
const NavBarBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  transform: translateX(-65%) translateY(-90%);
  background: #2d3436;
  border-radius: 0px 0px 20px 0px;
  z-index: 1;
  :hover {
    transform: translateX(0%);
    background: white;
  }
`;
const WayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: ${(props) => (props.icon ? "150px" : "100px")};
  border-bottom: solid 2px #2d3436;
  border-right: solid 2px #2d3436;
  border-radius: ${(props) => (props.icon ? "0 0 20px 0" : "0")};
`;

class NavBar extends Component {
  state = {};
  render() {
    return this.props.isLoggedIn ? (
      <NavBarBox>
        <WayBox>
          <Button
            color="pink"
            onClick={() => {
              window.location = "./room";
            }}
          >
            Select Room
          </Button>
        </WayBox>
        <WayBox>
          <Button
            color="vk"
            onClick={() => {
              window.location = "./stat";
            }}
          >
            Statistics
          </Button>
        </WayBox>
        <WayBox>
          <Button
            style={{ color: "white", background: "salmon" }}
            onClick={() => {
              window.location = "./role";
            }}
          >
            Exit Room
          </Button>
        </WayBox>
        <WayBox icon>
          <Button color="red" onClick={logout}>
            Logout
          </Button>
          <Icon
            name="list"
            size="large"
            style={{
              position: "absolute",
              right: "0.5rem",
              bottom: "0.5rem",
              color: "white",
            }}
          />
        </WayBox>
      </NavBarBox>
    ) : (
      ""
    );
  }
}

export default NavBar;
