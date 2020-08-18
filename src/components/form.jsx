import React, { Component } from "react";
import styled from "styled-components";
import { Button, Form } from "semantic-ui-react";
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
class LoginForm extends Component {
  render() {
    return (
      <StyledForm onSubmit={this.props.onSubmit}>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            placeholder="Username"
            id="username"
            onChange={this.props.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Password"
            onChange={this.props.onChange}
          />
        </Form.Field>
        <Button
          style={{ alignSelf: "center", marginTop: "1.5rem", width: "70%" }}
          color="vk"
        >
          Submit
        </Button>
      </StyledForm>
    );
  }
}

export default LoginForm;
