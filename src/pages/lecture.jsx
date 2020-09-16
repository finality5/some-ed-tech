import React, { Component } from "react";
import ChatBox from "../components/lectureRoomComponents/chatBox";
import styled from "styled-components";

class Lecture extends Component {
  state = {
    inputFields: {
      questionText: "",
    },
  };
  handleChangeInputValue = (e) => {
    const inputFields = { ...this.state.inputFields };
    inputFields[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ inputFields });
  };
  render() {
    return <ChatBox onChangeInputValue={this.handleChangeInputValue} />;
  }
}

export default Lecture;
