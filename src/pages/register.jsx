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
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
  handleSubmit = () => {
    const { username: email, password, displayName } = this.state.account;
    if (this.validateRequiredField()) {
      this.setState({ message: "" });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("regis success");
          this.updateUserProfile(displayName);
        })
        .catch((error) => {
          this.setState({ message: error.message });
          console.log("error");
        });
    }
  };
  updateUserProfile = (displayName) => {
    const user = auth.currentUser;
    console.log(user);
    user
      .updateProfile({
        displayName: displayName,
      })
      .then(() => {
        console.log("update profile successfully.");
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
        />
      </OutSideBox>
    );
  }
}

export default Register;
