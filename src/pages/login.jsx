import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import auth from "../firebase";
import LoginForm from "../components/loginComponents/loginForm";
import { FlexRow, StyledCircle } from "../components/sharedComponents";
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
    isLoading: false,
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
  handleSubmit = (e) => {
    const { username: email, password } = this.state.account;
    if (this.validateRequiredField()) {
      this.setState({ isLoading: true });
      auth
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          window.location = "/role";
          this.setState({
            currentUser: response.user,
            message: "",
            isLoading: false,
          });
        })
        .catch((error) => {
          this.setState({
            message: error.message,
            isLoading: false,
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
    } else return true;
  };
  redirectWhenLoggedInAlready = () => {
    window.location = "./role";
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showModal: true, showCircle: false });
    }, 2000);
  }
  componentWillReceiveProps({ user }) {
    this.setState({
      currentUser: user,
    });
  }
  render() {
    return !this.state.currentUser ? (
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
          isLoading={this.state.isLoading}
          {...this.props}
        />
      </OutSideBox>
    ) : (
      this.redirectWhenLoggedInAlready()
    );
  }
}

export default Login;
