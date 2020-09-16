import React, { Component } from "react";
import styled from "styled-components";
import { Input, Checkbox, Button, Icon } from "semantic-ui-react";
import { FlexColumn } from "../sharedComponents";
const StyledChatBoxArea = styled(FlexColumn)`
  align-items: center;
  border: solid 2px green;
`;
const StyledChatBox = styled.div`
  width: 80%;
  padding: 0px 2rem;
  height: 500px;
  border: solid 2px salmon;
  border-radius: 5px;
  overflow-y: auto;
`;
const StyledMessage = styled.div`
  margin: 0.75rem 0rem;
  border: solid 2px salmon;
`;
const GimmicksArea = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  border: solid 2px salmon;
`;
const InputArea = styled.div`
  width: 80%;
  padding: 0rem 2rem;
  border: solid 2px salmon;
`;
class ChatBox extends Component {
  state = {};
  render() {
    return (
      <StyledChatBoxArea>
        <StyledChatBox>
          <StyledMessage>Speaker 1 : Hello</StyledMessage>
          <StyledMessage>Speaker 2 : Hi</StyledMessage>
        </StyledChatBox>
        <GimmicksArea>
          <Checkbox label="Anonymous" toggle />
        </GimmicksArea>
        <InputArea>
          <Input
            style={{ width: "100%" }}
            id="questionText"
            placeholder="Type Your Question Here."
            onChange={this.props.onChangeInputValue}
            icon={
              <Button color="linkedin">
                SEND &nbsp; <Icon name="send" />
              </Button>
            }
          />
        </InputArea>
      </StyledChatBoxArea>
    );
  }
}

export default ChatBox;
