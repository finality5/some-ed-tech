import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Circle, Active, Woop } from "../sharedComponents";
const StyledCircle = styled(Circle)`
  border-top: solid 1px black;
  border-bottom: solid 3px black;
  border-left: solid 3px black;
  border-right: solid 3px black;
  animation: ${Active} 2s linear infinite;
  position: absolute;
`;
const StatusZone = styled.div`
  display: flex;
  justify-content: center;
`;
const CircleZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0.5;
  padding: 2rem;
`;
const InformationZone = styled.div`
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
`;
const RunningIconStatus = styled(Icon)`
  &.icon {
    color: lightgreen;
    animation: ${Woop} 1s linear infinite;
  }
`;
const Status = ({ instName, status }) => {
  return (
    <StatusZone>
      <CircleZone>
        <StyledCircle />
        <Icon
          size="huge"
          name="user"
          style={{ position: "absolute" }}
          color="teal"
        />{" "}
        <InformationZone>
          <div style={{ margin: "1rem 0rem" }}>
            Instructor : <span style={{ fontWeight: "400" }}>{instName}</span>
          </div>
          <div>
            Status :{" "}
            <span style={{ fontWeight: "400" }}>
              {status}... <RunningIconStatus name="bullseye" />
            </span>
          </div>
        </InformationZone>
      </CircleZone>
    </StatusZone>
  );
};

export default Status;
