import React, { Component } from "react";
import ChatBox from "../components/lectureRoomComponents/chatBox";
class Lecture extends Component {
  state = {
    isAnonymous: true,
    inputFields: {
      questionText: "",
    },
  };
  handleChangeInputValue = (e) => {
    const inputFields = { ...this.state.inputFields };
    inputFields[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ inputFields });
  };
  handleSelectAnonymous = () => {
    this.setState({ isAnonymous: !this.state.isAnonymous });
  };
  handleSendMessage = () => {
    console.log("MSG SENDED");
  };
  handleReply = () => {
    console.log("REPLY");
  };
  handleDelete = () => {
    console.log("DELETED");
  };
  render() {
    return (
      <ChatBox
        onChangeInputValue={this.handleChangeInputValue}
        onSelectAnonymous={this.handleSelectAnonymous}
        isAnonymous={this.state.isAnonymous}
        onSendMessage={this.handleSendMessage}
        onReply={this.handleReply}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default Lecture;
