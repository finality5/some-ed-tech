import React, { Component } from "react";
import styled from "styled-components";
import { Card, Divider } from "semantic-ui-react";
import RoomCard from "../components/roomCard";
import { FlexRow } from "../components/sharedComponents";
const TextHeader = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;
class SelectRoom extends Component {
  state = {
    data: [
      {
        id: "1",
        topicName: "Data Mining",
        time: "10.00 -11.00 A.M.",
        instName: "Kitsata Waiyamai",
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
        topicName: "RUNNING ROOM",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "running",
        audienceCount: "20",
      },
      {
        id: "5",
        topicName: "NOT RUNNING ROOM",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "idle",
        audienceCount: "1",
      },
      {
        id: "6",
        topicName: "DELETED ROOM",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "deleted",
        audienceCount: "1",
      },
      {
        id: "7",
        topicName: "RUNNING ROOM",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "running",
        audienceCount: "20",
      },
      {
        id: "8",
        topicName: "DELETED ROOM",
        time: "9.00 -12.00 A.M.",
        instName: "Taweedech Sirithanapipat",
        roomStatus: "deleted",
        audienceCount: "1",
      },
    ],
  };

  handleSearchChange = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
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
              />
            );
          })}
        </Card.Group>
      </div>
    );
  }
}

export default SelectRoom;
