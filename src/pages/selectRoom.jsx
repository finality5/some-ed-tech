import React, { Component } from "react";
import styled from "styled-components";
import { Card, Divider } from "semantic-ui-react";
import UserInformation from "../components/userInformation";
import RoomCard from "../components/roomCard";

const TextHeader = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;
class SelectRoom extends Component {
  state = {
    displayName: "",
    data: [
      {
        id: "1",
        topicName: "Data Mining",
        time: "10.00 -11.00 A.M.",
        instName: "Kitsana Waiyamai",
        roomStatus: "running",
        audienceCount: "20",
      },
      {
        id: "2",
        topicName: "Computer System Security",
        time: "13.00 -16.00 A.M.",
        instName: "Paruj Rattanavorabhan",
        roomStatus: "idle",
        audienceCount: "0",
      },
      {
        id: "3",
        topicName: "Basic Mechanic",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "deleted",
        audienceCount: "1",
      },

      {
        id: "4",
        topicName: "Computer Graphic",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "running",
        audienceCount: "20",
      },
      {
        id: "5",
        topicName: "Digital Signal Processing",
        time: "9.00 -12.00 A.M.",
        instName: "Charay Lertsudvichai",
        roomStatus: "idle",
        audienceCount: "1",
      },
      {
        id: "6",
        topicName: "Operating System",
        time: "9.00 -12.00 A.M.",
        instName: "Putchong Utayopas",
        roomStatus: "deleted",
        audienceCount: "1",
      },
      {
        id: "7",
        topicName: "Project Preparation",
        time: "9.00 -12.00 A.M.",
        instName: "Pradondech Nilakubta",
        roomStatus: "running",
        audienceCount: "20",
      },
      {
        id: "8",
        topicName: "Innovative Thinking",
        time: "9.00 -12.00 A.M.",
        instName: "Sitthichai Un-On",
        roomStatus: "deleted",
        audienceCount: "1",
      },
      {
        id: "9",
        topicName: "Advanced Mechanic 500",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "deleted",
        audienceCount: "1",
      },
      {
        id: "8",
        topicName: "Innovative Thinking",
        time: "9.00 -12.00 A.M.",
        instName: "Sutthichai",
        roomStatus: "deleted",
        audienceCount: "1",
      },
    ],
  };

  handleSearchChange = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  handleJoin = (id) => {
    console.log("Join room ID : ", id);
  };
  handleDelete = (id) => {
    console.log("Deleted room ID : ", id);
  };
  componentWillReceiveProps({ user }) {
    this.setState({
      displayName: user,
    });
  }
  separateDataByRoomStatus = () => {
    const data = [...this.state.data];
    const runningTopic = [];
    const idleTopic = [];
    const deletedTopic = [];
    data.map((data) => {
      if (data.roomStatus === "running") runningTopic.push(data);
      else if (data.roomStatus === "idle") idleTopic.push(data);
      else if (data.roomStatus === "deleted") deletedTopic.push(data);
    });
    return [runningTopic, idleTopic, deletedTopic];
  };
  render() {
    const runningTopic = this.separateDataByRoomStatus()[0];
    const idleTopic = this.separateDataByRoomStatus()[1];
    const deletedTopic = this.separateDataByRoomStatus()[2];
    return (
      <div style={{ padding: "4rem" }}>
        <UserInformation
          isLoggedIn={this.state.displayName}
          displayName={this.state.displayName}
        />
        <TextHeader>RUNNING ROOM</TextHeader>
        <Card.Group>
          {runningTopic.map((topic) => {
            const {
              id,
              topicName,
              time,
              instName,
              roomStatus,
              audienceCount,
            } = topic;
            return (
              <RoomCard
                id={id}
                topicName={topicName}
                time={time}
                instName={instName}
                roomStatus={roomStatus}
                audienceCount={audienceCount}
                onDelete={this.handleDelete}
                onJoin={this.handleJoin}
              />
            );
          })}
        </Card.Group>
        <Divider style={{ margin: "3rem 0" }} />
        <TextHeader>IDLE ROOM</TextHeader>
        <Card.Group>
          {idleTopic.map((topic) => {
            const {
              id,
              topicName,
              time,
              instName,
              roomStatus,
              audienceCount,
            } = topic;
            return (
              <RoomCard
                id={id}
                topicName={topicName}
                time={time}
                instName={instName}
                roomStatus={roomStatus}
                audienceCount={audienceCount}
                onDelete={this.handleDelete}
                onJoin={this.handleJoin}
              />
            );
          })}
        </Card.Group>
        <Divider style={{ margin: "3rem 0" }} />
        <TextHeader>DELETED ROOM</TextHeader>
        <Card.Group>
          {deletedTopic.map((topic) => {
            const {
              id,
              topicName,
              time,
              instName,
              roomStatus,
              audienceCount,
            } = topic;
            return (
              <RoomCard
                id={id}
                topicName={topicName}
                time={time}
                instName={instName}
                roomStatus={roomStatus}
                audienceCount={audienceCount}
                onDelete={this.handleDelete}
                onJoin={this.handleJoin}
              />
            );
          })}
        </Card.Group>
      </div>
    );
  }
}

export default SelectRoom;
