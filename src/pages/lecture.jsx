import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import ChatBox from "../components/lectureRoomComponents/chatBox";
import { FadeIn, Woop } from "../components/sharedComponents";
const StyledChatBox = styled.div`
  position: fixed;
  display: flex;
  right: 3rem;
  bottom: 3rem;
  transition: 1s;
  cursor: pointer;
  color: #222f3e;
  animation: ${FadeIn} 0.5s linear;
  :hover {
    transform: scale(1.1);
  }
`;
const StyledAlert = styled(Icon)`
  &.icon {
    color: red;
    margin-right: 1rem;
    animation: ${Woop} 1s linear infinite;
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
      <StyledChatBox
        onClick={() => {
          this.setState({
            openChatRoom: !this.state.openChatRoom,
          });
        }}
      >
        <div>
          <StyledAlert name="wechat" size="large">
            <div>2</div>
          </StyledAlert>
        </div>
        <div style={{ fontSize: "1.25em", fontWeight: "500" }}>
          <Icon size="massive" name="comment outline" />
          <div>Q & A Chat Room</div>
        </div>
      </StyledChatBox>
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
