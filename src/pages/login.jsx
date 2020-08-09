import React, { Component } from "react";
import styled from "styled-components";
import { StyledCircle } from "../components/loginComponents/circle";
import LoginBox from "../components/loginComponents/loginBox";
import { FlexRow } from "../components/sharedComponents";
import "./login.css";
const OutSideBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
`;
class Login extends Component {
  state = {
    showModal: false,
    showCircle: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showModal: true, showCircle: false });
    }, 2000);
  }
  render() {
    return (
      <OutSideBox>
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <LoginBox />
      </OutSideBox>
    );
  }
}

export default Login;
