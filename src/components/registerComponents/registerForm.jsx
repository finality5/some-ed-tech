import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon, Form } from "semantic-ui-react";
import { FadeIn } from "../fade";
import CreateForm from "../form";
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
  padding: 2rem 0 2rem 0;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  animation: ${FadeIn} 3s linear both;
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
    const { onSubmit, onChange, isRequired, errorMessage } = this.props;
    return (
      <FormBoxArea>
        <ImgHeader name="wpforms" size="big" color="brown" circular />
        <TextHeader>Register</TextHeader>
        <StyledForm onSubmit={onSubmit}>
          {this.renderInput(
            "Firstname",
            "firstname",
            true,
            onChange,
            isRequired.firstname
          )}
          {this.renderInput(
            "Lastname",
            "lastname",
            false,
            onChange,
            isRequired.lastname
          )}
          {this.renderInput(
            "Username",
            "username",
            false,
            onChange,
            isRequired.username
          )}
          {this.renderInput(
            "Password",
            "password",
            false,
            onChange,
            isRequired.password
          )}
          {errorMessage ? (
            <p style={{ marginLeft: "0.5rem", color: "salmon" }}>
              * {errorMessage}
            </p>
          ) : (
            <p style={{ display: "none" }}>NOTHING</p>
          )}
          {this.renderButton("Create Account", "vk")}
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
