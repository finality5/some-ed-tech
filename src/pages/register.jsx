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
    isLoading: false,
    account: {
      displayName: "",
      username: "",
      password: "",
    },
    message: "",
    required: {
      displayName: false,
      username: false,
      password: false,
    },
  };

  handleSubmit = () => {
    const { username: email, password, displayName } = this.state.account;
    if (this.validateRequiredField() && this.validateMaximumCharacters()) {
      this.setState({ message: "", isLoading: true });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.updateUserProfile(displayName);
        })
        .catch((error) => {
          this.setState({ message: error.message, isLoading: false });
        });
    }
  };
  updateUserProfile = (displayName) => {
    const user = auth.currentUser;
    user
      .updateProfile({
        displayName: displayName,
      })
      .then(() => {
        console.log("update profile successfully.");
        this.setState({ isLoading: false });
        window.location = "./role";
      })
      .catch(() => {
        console.log("cannot update profile information.");
      });
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
  validateMaximumCharacters = () => {
    if (this.state.account.displayName.length >= 12) {
      this.setState({ message: "Maximum Display name is 12 characters." });
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
  render() {
    return (
      <OutSideBox>
        <RegisterForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          isRequired={this.state.required}
          errorMessage={this.state.message}
          isLoading={this.state.isLoading}
        />
      </OutSideBox>
    );
  }
}

export default Register;
