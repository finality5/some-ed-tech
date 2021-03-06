import React, { Component } from "react";
import styled from "styled-components";
import { Card, Divider, Button, Icon, Modal, Input } from "semantic-ui-react";
import UserInformation from "../components/userInformation";
import RoomCard from "../components/roomCard";
// import Input from "../components/input";

const TextHeader = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

class SelectRoom extends Component {
  state = {
    displayName: "",
    role: "instructor",
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
        instName: "Sitthichai Sri-On",
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
        id: "10",
        topicName: "Innovative Thinking",
        time: "9.00 -12.00 A.M.",
        instName: "Sutthichai",
        roomStatus: "deleted",
        audienceCount: "1",
      },
      {
        id: "11",
        topicName: "Innovative Thinking",
        time: "9.00 -12.00 A.M.",
        instName: "Sutthichai",
        roomStatus: "ready",
        audienceCount: "1",
      },
      {
        id: "12",
        topicName: "Innovative Thinking",
        time: "9.00 -12.00 A.M.",
        instName: "Sutthichai",
        roomStatus: "ready",
        audienceCount: "1",
      },
    ],
    openAddRoomModal: false,
    idDeletedModal: 0,
    valueRoomCode: "",
  };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "whiteTheme";
  }

  handleJoin = (id, role) => {
    if (role === "audience") console.log("Join room ID : ", id);
    else if (role === "instructor") console.log("Starting room ID : ", id);
    window.location = "./lecture";
  };
  handleDelete = (id) => {
    console.log("Deleted room ID : ", id);
  };
  handleChangeValueRoomCode = (e) => {
    const valueRoomCode = e.currentTarget.value;
    this.setState({ valueRoomCode });
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
    const readyTopic = []; // for inst.

    data.map((data) => {
      if (data.roomStatus === "running") runningTopic.push(data);
      else if (data.roomStatus === "idle") idleTopic.push(data);
      else if (data.roomStatus === "deleted") deletedTopic.push(data);
      else if (data.roomStatus === "ready") readyTopic.push(data); // for inst open.
    });
    return [runningTopic, idleTopic, deletedTopic, readyTopic];
  };

  separateSection = (topic, section) => {
    return (
      <React.Fragment>
        <TextHeader>{topic}</TextHeader>
        <Card.Group>
          {section.map((topic) => {
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
                onOpenDeletedModal={this.handleDeletedModal}
                idDeletedModal={this.state.idDeletedModal}
              />
            );
          })}
        </Card.Group>
        <Divider style={{ margin: "3rem 0" }} />
      </React.Fragment>
    );
  };
  handleDeletedModal = (id) => {
    const idDeletedModal = id;
    this.setState({ idDeletedModal });
  };
  render() {
    const runningTopic = this.separateDataByRoomStatus()[0];
    const idleTopic = this.separateDataByRoomStatus()[1];
    const deletedTopic = this.separateDataByRoomStatus()[2];
    const readyTopic = this.separateDataByRoomStatus()[3]; //for inst.
    return this.state.role === "audience" ? (
      <div style={{ padding: "4rem" }}>
        <UserInformation
          isLoggedIn={this.state.displayName}
          displayName={this.state.displayName}
        />
        <Modal
          style={{
            padding: "2rem",
            borderRadius: "50px",
            boxShadow: "0px 0px 20px black",
          }}
          onOpen={() => {
            this.setState({ openAddRoomModal: true });
          }}
          onClose={() => {
            this.setState({ openAddRoomModal: false });
          }}
          open={this.state.openAddRoomModal}
          trigger={
            <Button style={{ marginBottom: "2rem" }} color="linkedin">
              <Icon name="plus" /> Add New Room
            </Button>
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Input
              style={{ border: "none" }}
              htmlFor="codeRoom"
              id="codeRoom"
              autoFocus={true}
              placeholder="Put Your Code Here."
              onChange={this.handleChangeValueRoomCode}
              icon="search"
            />
            <Button style={{ marginLeft: "2rem" }} color="linkedin" circular>
              JOIN
            </Button>
          </div>
        </Modal>
        <Button
          color="pink"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            this.setState({ role: "instructor" });
          }}
        >
          <Icon name="sync" /> Swap Role to the Instructor
        </Button>
        {runningTopic.length !== 0 ? (
          this.separateSection("Running Room", runningTopic)
        ) : (
          <p style={{ display: "none" }} />
        )}
        {idleTopic.length !== 0 ? (
          this.separateSection("Idle Room", idleTopic)
        ) : (
          <p style={{ display: "none" }} />
        )}
        {deletedTopic.length !== 0 ? (
          this.separateSection("Deleted Room", deletedTopic)
        ) : (
          <p style={{ display: "none" }}></p>
        )}
      </div>
    ) : (
      <div style={{ padding: "4rem" }}>
        <UserInformation
          isLoggedIn={this.state.displayName}
          displayName={this.state.displayName}
        />
        <div style={{ marginBottom: "2rem" }}>
          <Button
            color="blue"
            onClick={() => {
              window.location = "./createroom";
            }}
          >
            <Icon name="plus" />
            Create New Room
          </Button>
          <Button
            color="pink"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              this.setState({ role: "audience" });
            }}
          >
            <Icon name="sync" /> Swap Role to the Audience
          </Button>
        </div>
        {readyTopic.length !== 0 ? (
          this.separateSection("Ready to Meet Rooms", readyTopic)
        ) : (
          <p style={{ display: "none" }} />
        )}
      </div>
    );
  }
}

export default SelectRoom;
