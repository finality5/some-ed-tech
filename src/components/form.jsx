import React, { Component } from "react";
import styled from "styled-components";
import { Button, Form } from "semantic-ui-react";
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };
  handleSubmit = (e) => {};
  handleChange = (e) => {
    console.log(e.currentTarget.id);
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Field>
          <label htmlFor="Username">Username</label>
          <input
            autoFocus
            placeholder="Username"
            id="Username"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="Password">Password</label>
          <input
            id="Password"
            placeholder="Password"
            onChange={this.handleChange}
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
