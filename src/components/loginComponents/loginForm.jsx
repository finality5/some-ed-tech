import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Form, Divider, Button } from "semantic-ui-react";
import { FadeIn } from "../fade";
import CreateForm from "../form";
const FormBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 2rem 0 2rem 0;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  animation: ${FadeIn} 3s linear both;
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
`;
class LoginForm extends CreateForm {
  
  render() {
    const { onSubmit, onChange, isRequired, errorMessage } = this.props;
    return (
      <FormBoxArea>
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
          <input type="password" style={{ display: "none" }} />
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

          {this.renderButton("Submit", "vk")}
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
            guest.
          </Link>
        </InformationBox>
      </FormBoxArea>
    );
  }
}

export default LoginForm;