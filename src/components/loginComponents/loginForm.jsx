import React from "react";
import styled from "styled-components";
import note from "../../assets/images/note.svg";
import hat from "../../assets/images/hat.svg";
import { Link } from "react-router-dom";
import { FadeIn } from "../sharedComponents";
import { Icon, Form, Divider, Button } from "semantic-ui-react";
import CreateForm from "../form";
const FormBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 3rem 0 3rem 0;
  box-shadow: 0px 0px 10px #7ed6df;
  border-radius: 20px;
  animation: ${FadeIn} 3s linear both;
  background-color: white;
  @media (max-width: 850px) {
    width: 65%;
  }
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ImgHeader = styled(Icon)``;
const TextHeader = styled.p`
  font-size: 2rem;
  margin-top: 0.5rem;
`;
const InformationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  padding: 0.5rem 0 0.5rem 0;
  background-color: #ecf0f1;
  font-size: 1em;
  margin-top: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  font-weight: 600;
`;
const StyledHat = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 10rem;
`;
const StyledNote = styled.img`
  position: absolute;
  right: 10rem;
  width: 50px;
  height: 50px;
`;
class LoginForm extends CreateForm {
  render() {
    const {
      onSubmit,
      onChange,
      isRequired,
      errorMessage,
      isLoading,
    } = this.props;
    return (
      <FormBoxArea>
        {/* <StyledHat src={note} />
        <StyledNote src={hat} /> */}
        <ImgHeader name="key" size="big" color="brown" circular />
        <TextHeader>Sign In</TextHeader>
        <StyledForm onSubmit={onSubmit}>
          {this.renderInput(
            "Email",
            "username",
            true,
            onChange,
            isRequired.username,
            "text"
          )}
          {this.renderInput(
            "Password",
            "password",
            false,
            onChange,
            isRequired.password,
            "password"
          )}
          {errorMessage ? (
            <p style={{ marginLeft: "0.5rem", color: "salmon" }}>
              * {errorMessage}
            </p>
          ) : (
            <p style={{ display: "none" }}>NOTHING</p>
          )}

          {this.renderButton("Submit", "vk", isLoading)}
        </StyledForm>
        <Divider horizontal>OR</Divider>
        <Button
          onClick={() => {
            this.props.history.push("/register");
          }}
          color="teal"
        >
          <Icon name="add" />
          Create New Account
        </Button>
        <InformationBox>
          Join as a &nbsp;
          <Link to="/role" style={{ cursor: "pointer" }}>
            guest. &nbsp;
          </Link>
          <Icon name="spy" />
        </InformationBox>
      </FormBoxArea>
    );
  }
}

export default LoginForm;
