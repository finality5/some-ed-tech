import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import Input from "./input";
class CreateForm extends Component {
  renderButton = (label, color) => {
    return (
      <Button
        style={{ alignSelf: "center", marginTop: "1.5rem", width: "70%" }}
        color={color}
      >
        {label}
      </Button>
    );
  };

  renderInput = (name, id, autoFocus, onChange, required) => {
    return (
      <Form.Field
        required
        style={{
          boxShadow: required ? "0px 0px 3px 0px salmon" : "none",
          padding: "0.5rem",
        }}
      >
        <Input
          type={id === "password" ? id : "text"}
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
