import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Form } from "semantic-ui-react";
import CreateForm from "../form";
import { FadeIn } from "../sharedComponents";
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const FormBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  padding: 3rem 0 3rem 0;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #7ed6df;
  animation: ${FadeIn} 1s linear both;
  background-color: white;
  @media (max-width: 850px) {
    width: 65%;
  }
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
  font-size: 0.75em;
  margin-top: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`;
class RegisterForm extends CreateForm {
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
        <ImgHeader name="wpforms" size="big" color="brown" circular />
        <TextHeader>Register</TextHeader>
        <StyledForm onSubmit={onSubmit}>
          {this.renderInput(
            "Display name",
            "displayName",
            true,
            onChange,
            isRequired.displayName,
            "text"
          )}
          {this.renderInput(
            "Email",
            "username",
            false,
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
          {this.renderButton("Create Account", "vk", isLoading)}
        </StyledForm>
        <InformationBox>
          Have Existing Account ? &nbsp;
          <Link to="/login" style={{ cursor: "pointer" }}>
            Sign In.
          </Link>
        </InformationBox>
      </FormBoxArea>
    );
  }
}

export default RegisterForm;
