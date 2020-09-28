import React, { Component } from "react";
import styled from "styled-components";
import { Icon, Input, Button } from "semantic-ui-react";
import ChatBox from "../components/lectureRoomComponents/chatBox";
import Status from "../components/lectureRoomComponents/status";
import Survey from "../components/lectureRoomComponents/survey";
import UserInformation from "../components/userInformation";
import { FadeIn, Woop } from "../components/sharedComponents";
const StyledChatBox = styled.div`
  display: flex;
  transition: 1s;
  cursor: pointer;
  color: #222f3e;
  padding: 2rem;
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
const BottomZone = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RecommendZone = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

class Lecture extends Component {
  state = {
    displayName: "",
    openChatRoom: false,
    isAnonymous: true,
    inputFields: {
      questionText: "",
      recommendText: "",
    },
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }
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
  componentWillReceiveProps({ user }) {
    this.setState({
      displayName: user,
    });
  }
  render() {
    return !this.state.openChatRoom ? (
      <div>
        <UserInformation displayName={this.state.displayName} />
        <Status instName="Tanya Tansriprapasiri" status="Lecturing" />
        <Survey
          question="Question 1"
          choices={[
            { text: "choice1", color: "red" },
            { text: "choice2", color: "teal" },
            { text: "choice3", color: "green" },
          ]}
        />
        <BottomZone>
          <RecommendZone>
            <div>
              <h3>Additional Recommendation to Instructor</h3>
              <Input
                id="recommendText"
                placeholder="Put your feedback here."
                onChange={this.handleChangeInputValue}
              />
              <Button
                style={{ marginLeft: "1rem" }}
                color="twitter"
                icon
                labelPosition="right"
              >
                <Icon name="send" />
                Send
              </Button>
            </div>
          </RecommendZone>
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
            <div style={{ fontSize: "1.15em", fontWeight: "500" }}>
              <Icon size="massive" name="comment outline" />
              <div>Q & A Chat Room</div>
            </div>
          </StyledChatBox>
        </BottomZone>
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
