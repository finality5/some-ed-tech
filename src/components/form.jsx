import React, { Component } from "react";
import styled from "styled-components";
import { Button, Form } from "semantic-ui-react";
import Input from "./input";
import { Spinner } from "./sharedComponents";
const StyledButton = styled(Button)`
  &.ui.button {
    align-self: center;
    margin-top: 1.5rem;
    width: 70%;
    display: flex;
    justify-content: center;
  }
`;
class CreateForm extends Component {
  renderButton = (label, color, isLoading) => {
    return (
      <StyledButton color={color} isLoading={isLoading}>
        {isLoading ? <Spinner /> : label}
      </StyledButton>
    );
  };

  renderInput = (name, id, autoFocus, onChange, required, type) => {
    return (
      <Form.Field
        required
        style={{
          boxShadow: required ? "0px 0px 3px 0px salmon" : "none",
          padding: "0.5rem",
        }}
      >
        <Input
          type={type}
          autoFocus={autoFocus}
          htmlFor={id}
          id={id}
          HeaderName={name}
          placeholder={name}
          onChange={onChange}
        />
      </Form.Field>
    );
  };
}

export default CreateForm;
