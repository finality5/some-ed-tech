import React, { Component } from "react";
import styled from "styled-components";
import { Input, Checkbox, Button, Icon } from "semantic-ui-react";
import MessageComponent from "./messageComponent";
import { FlexColumn, FadeIn } from "../sharedComponents"; 
const StyledChatBoxArea = styled(FlexColumn)`
  position: absolute;
  align-items: center;
  margin-top: 3.5rem;
  animation: ${FadeIn} 0.5s linear;
`;
const StyledChatBox = styled.div`
  background-color: ${(props) => (props.isAnonymous ? "#2d3436" : "white")};
  box-shadow: ${(props) =>
    props.isAnonymous
      ? "0px 0px 15px whitesmoke"
      : "0px 0px 15px rgba(0, 0, 0, 0.15)"};
  width: 80%;
  padding: 0px 2rem;
  height: 400px;
  border-radius: 5px;
  overflow-y: auto;
  transition: 0.5s;
  ::-webkit-scrollbar {
    background: white;
  }
`;
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => (props.isAnonymous ? "#2d3436" : "white")};
  /* box-shadow: ${(props) =>
    props.isAnonymous
      ? "0px 0px 15px whitesmoke"
      : "0px 0px 15px rgba(0, 0, 0, 0.15)"}; */
  width: 80%;
  font-size: 2em;
  font-weight: 400;
  color: ${(props) => (props.isAnonymous ? "white" : "black")};
  margin-bottom: 0.5rem;
  padding: 1.5rem;
  border-radius: 5px;
  transition: 0.5s;
`;
const GimmicksArea = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  margin: 0.25rem 0rem;
  border-radius: 5px;
  transition: 0.5s;
  background-color: white;
  z-index: 0;
`;
const InputArea = styled.div`
  width: 80%;
  background-color: ${(props) => (props.isAnonymous ? "#2d3436" : "white")};
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
`;
const StyledIcon = styled(Icon)`
  &.icon {
    color: red;
    opacity: 0.5;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      opacity: 1;
      transform: scale(1.01);
    }
  }
`;
class ChatBox extends Component {
  state = {};
  render() {
    const {
      isAnonymous,
      onSelectAnonymous,
      onSendMessage,
      onChangeInputValue,
      onReply,
      onDelete,
      onCloseChatRoom,
    } = this.props;
    console.log(isAnonymous);
    return (
      <StyledChatBoxArea>
        <StyledHeader isAnonymous={isAnonymous}>
          <div>
            Q & A &nbsp;
            <Icon
              style={{ fontSize: "0.9em" }}
              name="question circle outline"
            />
          </div>
          <StyledIcon name="times circle outline" onClick={onCloseChatRoom} />
        </StyledHeader>
        <StyledChatBox isAnonymous={isAnonymous}>
          <MessageComponent
            owner="Speaker1"
            text="Hello !"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Speaker2"
            text="Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yovu repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?v"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Speaker2"
            text="Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yovu repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?v"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Speaker2"
            text="Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yoep 7.14 ?Could you repeat step 7.14 ?Could yovu repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?Could you repeat step 7.14 ?v"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
        </StyledChatBox>
        <GimmicksArea isAnonymous={isAnonymous}>
          <Checkbox
            label="Anonymous Question"
            defaultChecked={isAnonymous}
            toggle
            onClick={onSelectAnonymous}
          />
          {isAnonymous ? (
            <span style={{ marginLeft: "0.5rem", color: "green" }}>
              Activated <Icon name="check circle outline" />
            </span>
          ) : (
            <span style={{ marginLeft: "0.5rem", color: "red" }}>
              Not Activated <Icon name="times circle outline" />
            </span>
          )}
          &nbsp;
          <Icon name="spy" />
        </GimmicksArea>
        <InputArea isAnonymous={isAnonymous}>
          <Input
            onKeyPress={(e) => {
              if (e.key === "Enter") onSendMessage();
            }}
            style={{
              width: "100%",
              boxShadow: "0px 0px 1px black",
              marginRight: "2rem",
            }}
            id="questionText"
            placeholder="Type Your Question Here."
            onChange={onChangeInputValue}
          />
          <Button
            color={!isAnonymous ? "linkedin" : "vk"}
            icon
            labelPosition="left"
            onClick={onSendMessage}
          >
            <Icon name="send" />
            SEND
          </Button>
        </InputArea>
      </StyledChatBoxArea>
    );
  }
}

export default ChatBox;
