import React, { Component } from "react";
import styled from "styled-components";
import auth from "../firebase";
import RegisterForm from "../components/registerComponents/registerForm";
import { FlexRow } from "../components/sharedComponents";
const OutSideBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem;
`;
class Register extends Component {
  state = {
    account: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    },
    message: "",
    required: {
      firstname: false,
      lastname: false,
      username: false,
      password: false,
    },
  };

  handleSubmit = (e) => {
    const { username: email, password } = this.state.account;
    if (this.validateRequiredField()) {
      this.setState({ message: "" });
      auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        this.setState({ message: error.message });
        console.log(error.message);
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
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log(user.uid);
    //     this.setState({
    //       currentUser: user,
    //     });
    //   }
    // });
  }
  render() {
    return (
      <OutSideBox>
        <RegisterForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          isRequired={this.state.required}
          errorMessage={this.state.message}
        />
      </OutSideBox>
    );
  }
}

export default Register;
