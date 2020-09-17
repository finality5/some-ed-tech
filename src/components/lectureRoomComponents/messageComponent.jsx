import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
const StyledMessage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  margin: 0.75rem 0rem;
  padding: 0.75rem;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isAnonymous
      ? "0px 0px 3px whitesmoke"
      : "0px 0px 15px rgba(0, 0, 0, 0.15)"};
  transition: 0.25s;
  :hover {
    transform: scale(1.01);
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledIcon = styled(Icon)`
  &.icon {
    opacity: 0.5;
    cursor: pointer;
    :hover {
      opacity: 1;
      transform: scale(1.01);
    }
  }
`;
const StyledInformation = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledOwner = styled.div`
  font-weight: 500;
`;
const StyledLike = styled(Icon)`
  &.icon {
    /* position: absolute; */
    color: salmon;
    right: 0;
    bottom: 0;
  }
`;
const StyledText = styled.div``;
const MessageComponent = ({ owner, text, isAnonymous, onReply, onDelete }) => {
  return (
    <StyledMessage isAnonymous={isAnonymous}>
      <StyledInformation>
        <StyledOwner>{owner}&nbsp;</StyledOwner>:&nbsp;
        <StyledText>{text}</StyledText>
      </StyledInformation>
      <IconBox>
        <StyledIcon onClick={onReply} style={{ color: "green" }} name="redo" />
        <StyledIcon onClick={onDelete} style={{ color: "red" }} name="close" />
        <StyledIcon name="like" style={{ color: "purple" }} />
        <span> 1</span>
      </IconBox>
    </StyledMessage>
  );
};

export default MessageComponent;
