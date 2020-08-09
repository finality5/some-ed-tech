import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { FadeIn } from "../../components/fade";
import LoginForm from "../../components/form";
const LoginBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
  width: 30%;
  align-items: center;
  padding: 2rem 0 2rem 0;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  animation: ${FadeIn} 3s linear both;
`;
const ImgHeader = styled(Icon)``;
const TextHeader = styled.p`
  font-size: 2rem;
  margin-top: 0.5rem;
`;
const ForgetPasswordBox = styled.div`
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
const LoginBox = () => {
  return (
    <LoginBoxArea>
      <ImgHeader name="key" size="big" color="brown" circular />
      <TextHeader>Login</TextHeader>
      <LoginForm />
      <ForgetPasswordBox>
        <a style={{ color: "black", marginRight: "0.5em" }}>Some Information</a>
        <a style={{ cursor: "pointer" }}>Click Here.</a>
      </ForgetPasswordBox>
    </LoginBoxArea>
  );
};

export default LoginBox;
