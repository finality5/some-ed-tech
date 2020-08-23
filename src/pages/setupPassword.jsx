import React, { Component } from "react";
import styled from "styled-components";
import auth from "../firebase";
import { actionCodeSettings as configVerifyEmail } from "../firebase/config";
import RegisterForm from "../components/registerComponents/registerForm";
import SetupPasswordForm from "../components/setupPasswordComponents/setupPasswordForm";
import { FlexRow } from "../components/sharedComponents";
const OutSideBox = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem;
`;
class SetupPassword extends Component {
  state = {
    data: {
      password: "",
      confirmPassword: "",
    },
    message: "",
    required: {
      password: false,
      confirmPassword: false,
    },
  };
  componentDidMount() {
    // if (auth.isSignInWithEmailLink(window.location.href)) {
    //   console.log("okkkk");
    // }
  }

  handleSubmit = (e) => {
    const { password, confirmPassword } = this.state.data;
    if (this.validate()) {
      this.setState({ message: "" });
      const email = localStorage.getItem("emailForSignIn");
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          this.setState({ message: error.message });
          console.log(error.message);
        });
    }
  };
  validate = () => {
    const requiredList = Object.keys({ ...this.state.data });
    const toSet = { ...this.state.required };
    requiredList.map((v) => {
      if (this.state.data[v]) {
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
    } else if (this.state.data.password !== this.state.data.confirmPassword) {
      this.setState({ message: "Password doesn't match." });
      return false;
    } else {
      return true;
    }
  };
  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ data });
  };
  render() {
    return (
      <OutSideBox>
        <SetupPasswordForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          isRequired={this.state.required}
          errorMessage={this.state.message}
        />
      </OutSideBox>
    );
  }
}

export default SetupPassword;
