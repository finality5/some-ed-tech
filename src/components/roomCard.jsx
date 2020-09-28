import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Card, Icon, Button, Divider, Modal } from "semantic-ui-react";
const Woop = keyframes`
  0% {
      transform: scale(1);
  }
  50%{
      transform:scale(1.5);
  }
  100%{
      transform:scale(1);
  }
`;
const shake = keyframes`
  0% {
    transform:rotate(0);
  }
  5%{
    transform:rotate(1deg);
  }
  10%{
    transform:rotate(0);
  }
  100%{
    transform:rotate(0);
  }
`;
const StyledCard = styled(Card)`
  animation: ${shake} 2.5s linear
    ${(props) => (props.running ? "infinite" : "0")};
  :hover {
    transform: scale(1.05);
  }
`;
const ManageRoom = styled(Icon)`
  &.icon {
    opacity: 0.5;
    position: absolute;
    top: 10%;
    right: 5%;
    cursor: pointer;
    :hover {
      opacity: 1;
      transform: scale(1.25);
    }
  }
`;
const RunningIconStatus = styled(Icon)`
  &.icon {
    margin-left: 1rem;
    color: lightgreen;
    animation: ${Woop} 2s linear infinite;
  }
`;
const IdleIconStatus = styled(Icon)`
  &.icon {
    margin-left: 1rem;
    color: black;
  }
`;
const DeletedIconStatus = styled(Icon)`
  &.icon {
    margin-left: 1rem;
    color: red;
  }
`;
const StyledJoinButton = styled(Button)``;
const StyledModal = styled(Modal)`
  &.dimmer {
    background-color: red !important;
  }
`;
const RoomStatus = styled.div``;
class RoomCard extends Component {
  state = {};
  render() {
    const {
      id,
      topicName,
      time,
      instName,
      roomStatus,
      audienceCount,
      onDelete,
      onJoin,
      onOpenDeletedModal,
      idDeletedModal,
    } = this.props;
    return (
      <StyledCard
        style={{
          padding: "1rem",
          margin: "1rem 1rem",
          borderRadius: "2rem",
          boxShadow:
            roomStatus === "running"
              ? "0px 0px 12px lightgreen"
              : roomStatus === "idle"
              ? "0px 0px 12px #82ccdd"
              : "0px 0px 12px #f8c291",
        }}
        running={roomStatus === "running" ? true : false}
      >
        <Card.Content>
          <ManageRoom
            name="remove circle"
            style={{ color: "red" }}
            onClick={() => onOpenDeletedModal(id)}
          />
          <StyledModal
            style={{
              padding: "2rem",
              borderRadius: "50px",
              boxShadow: "0px 0px 20px salmon",
            }}
            // onOpen={() => onOpenDeletedModal()}
            onClose={() => onOpenDeletedModal(0)}
            open={id === idDeletedModal ? true : false}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3>
                Confirm Your &nbsp;
                <h3 style={{ color: "gray", display: "inline" }}>
                  {topicName}
                </h3>
                &nbsp; Room Deletion ?
              </h3>
              <div>
                <Button
                  color="red"
                  style={{ margin: "0.5rem 1.5rem 0rem 0rem" }}
                  onClick={() => onDelete(id)}
                >
                  Delete
                </Button>
                <Button
                  color="black"
                  style={{ margin: "0.5rem 0rem 0rem 1.5rem" }}
                  onClick={() => onOpenDeletedModal(0)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </StyledModal>
          <Card.Header>{topicName}</Card.Header>
          <Card.Meta>Time : {time}</Card.Meta>
          <Card.Description>Instructor : {instName}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          &nbsp; {audienceCount} audiences are in this room.
          <RoomStatus>
            <Icon name="chat" /> &nbsp;Room Status : {roomStatus}
            {roomStatus === "running" ? (
              <RunningIconStatus name="bullseye" />
            ) : roomStatus === "deleted" ? (
              <DeletedIconStatus name="close" />
            ) : (
              <IdleIconStatus name="coffee" />
            )}
            {roomStatus === "running" ? (
              <div>
                <Divider />
                <StyledJoinButton
                  content="JOIN"
                  color="google plus"
                  fluid
                  onClick={() => onJoin(id)}
                />
              </div>
            ) : (
              <p style={{ display: "none" }} />
            )}
          </RoomStatus>
        </Card.Content>
      </StyledCard>
    );
  }
}

export default RoomCard;
