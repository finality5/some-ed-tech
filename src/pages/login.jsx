import React, { Component } from "react";
import styled from "styled-components";
import auth from "../firebase";
import { StyledCircle } from "../components/loginComponents/circle";
import LoginBox from "../components/loginComponents/loginBox";
import { FlexRow } from "../components/sharedComponents";
const OutSideBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    currentUser: "",
    message: "",
    showModal: false,
    showCircle: true,
  };

  handleSubmit = (e) => {
    const { username: email, password } = this.state.account;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.setState({
          currentUser: response.user,
        });
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
      });
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        this.setState({
          currentUser: user,
        });
      }
    });
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
        <LoginBox onSubmit={this.handleSubmit} onChange={this.handleChange} />
      </OutSideBox>
    );
  }
}

export default Login;
