import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button, Icon } from "semantic-ui-react";
import ChatBox from "../components/lectureRoomComponents/chatBox";
const StyledChatBox = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  transition: 1s;
  cursor: pointer;
  color: #222f3e;
  :hover {
    transform: scale(1.1);
  }
`;
class Lecture extends Component {
  state = {
    openChatRoom: false,
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
  handleCloseChatRoom = () => {
    this.setState({
      openChatRoom: !this.state.openChatRoom,
    });
  };

  render() {
    return !this.state.openChatRoom ? (
      <div>
        <StyledChatBox
          onClick={() => {
            this.setState({
              openChatRoom: !this.state.openChatRoom,
            });
          }}
        >
          <Icon size="massive" name="comment outline" />
          <div style={{ fontSize: "1.25em", fontWeight: "500" }}>
            Q & A Chat Room
          </div>
        </StyledChatBox>
      </div>
    ) : (
      <ChatBox
        openChatRoom={this.state.openChatRoom}
        onChangeInputValue={this.handleChangeInputValue}
        onSelectAnonymous={this.handleSelectAnonymous}
        isAnonymous={this.state.isAnonymous}
        onSendMessage={this.handleSendMessage}
        onReply={this.handleReply}
        onDelete={this.handleDelete}
        onCloseChatRoom={this.handleCloseChatRoom}
      />
    );
  }
}

export default Lecture;
