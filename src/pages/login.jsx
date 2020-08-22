import React, { Component } from "react";
import styled from "styled-components";
import auth from "../firebase";
import { StyledCircle } from "../components/loginComponents/circle";
import LoginForm from "../components/loginComponents/loginForm";
import { FlexRow } from "../components/sharedComponents";

const OutSideBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  margin: 5rem 0rem;
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
    required: {
      username: false,
      password: false,
    },
  };
  handleSubmit = (e) => {
    const { username: email, password } = this.state.account;
    if (this.validateRequiredField()) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          this.setState({
            currentUser: response.user,
            message: "",
          });
        })
        .catch((error) => {
          this.setState({
            message: error.message,
          });
        });
    }
  };
  validateRequiredField = () => {
    const requiredList = Object.keys({ ...this.state.account });
    const toSet = { ...this.state.required };
    requiredList.map((v) => {
      if (this.state.account[v]) {
        toSet[v] = false;
      } else {
        toSet[v] = true;
      }
    });
    this.setState({ required: toSet });
    const requiredStatus = Object.values({ ...toSet });
    if (requiredStatus.includes(true)) {
      this.setState({ message: "Please complete the required field." });
      return false;
    } else {
      return true;
    }
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
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
    console.log(this.props.history);
    return (
      <OutSideBox>
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <StyledCircle checkOverflowY={this.state.showCircle} />
        <LoginForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          isRequired={this.state.required}
          errorMessage={this.state.message}
          {...this.props}
        />
      </OutSideBox>
    );
  }
}

export default Login;
