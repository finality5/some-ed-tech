import React, { Component } from "react";
import styled from "styled-components";
import { Input, Checkbox, Button, Icon } from "semantic-ui-react";
import MessageComponent from "./messageComponent";
import { FlexColumn, FadeIn } from "../sharedComponents";
const StyledChatBoxArea = styled(FlexColumn)`
  position: relative;
  align-items: center;
  margin-top: 3.5rem;
  animation: ${FadeIn} 0.5s linear;
  min-width: 40rem;
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
            owner="John Adam"
            text="Hello !"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Chalee Christ"
            text="Hi !"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Anonymous"
            text="Guys, Could you repeat step 7.14 for me ?"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Speaker2"
            text="Sure, In mathematics, a Fourier transform (FT) is a mathematical transform that decomposes a function (often a function of time, or a signal) into its constituent frequencies, such as the expression of a musical chord in terms of the volumes and frequencies of its constituent notes. The term Fourier transform refers to both the frequency domain representation and the mathematical operation that associates the frequency domain representation to a function of time."
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />
          <MessageComponent
            owner="Anonymous"
            text="That's Wrong bro !,  The Fourier transform of a function of time is a complex-valued function of frequency, whose magnitude (absolute value) represents the amount of that frequency present in the original function, and whose argument is the phase offset of the basic sinusoid in that frequency. The Fourier transform is not limited to functions of time, but the domain of the original function is commonly referred to as the time domain. There is also an inverse Fourier transform that mathematically synthesizes the original function from its frequency domain representation, as proven by the Fourier inversion theorem. A reason for the negative sign in the exponent is that it is common in electrical engineering to represent by {\displaystyle f(x)=e^{2\pi i\xi _{0}x}}{\displaystyle f(x)=e^{2\pi i\xi _{0}x}} a signal with zero initial phase and frequency {\displaystyle \xi _{0}.}{\displaystyle \xi _{0}.}[3][remark 5] The negative sign convention causes the product {\displaystyle e^{2\pi i\xi _{0}x}e^{-2\pi i\xi x}}{\displaystyle e^{2\pi i\xi _{0}x}e^{-2\pi i\xi x}} to be 1 (frequency zero) when {\displaystyle \xi =\xi _{0},}{\displaystyle \xi =\xi _{0},} causing the integral to diverge. The result is a Dirac delta function at {\displaystyle \xi =\xi _{0}}{\displaystyle \xi =\xi _{0}}, which is the only frequency component of the sinusoidal signal {\displaystyle e^{2\pi i\xi _{0}x}.}{\displaystyle e^{2\pi i\xi _{0}x}.}

When the independent variable x represents time, the transform variable ξ represents frequency (e.g. if time is measured in seconds, then frequency is in hertz). Under suitable conditions, f is determined by {\displaystyle {\hat {f}}}{\hat {f}} via the inverse transform:"
            onReply={onReply}
            onDelete={onDelete}
            isAnonymous={isAnonymous}
          />{" "}
          <MessageComponent
            owner="Anonymous"
            text="Thanks."
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
