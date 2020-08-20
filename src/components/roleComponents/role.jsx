import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const StyledText = styled.p`
  color: whitesmoke;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 100;
`;
const StyledCircle = styled.div`
  width: ${(props) => (props.role === "INSTRUCTOR" ? "13rem" : "12rem")};
  height: ${(props) => (props.role === "INSTRUCTOR" ? "13rem" : "12rem")};
  border-radius: 50%;
  border-left: solid 5px white;
  border-right: solid 4px white;
  border-top: solid 0.1px whitesmoke;
  border-bottom: solid 3px white;
  position: absolute;
  transition: 0.5s;
`;
const RoleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.125);
    & > ${StyledCircle} {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 650px) {
    transform: scale(0.8);
    :hover {
      transform: scale(0.95);
    }
  }
`;
export const Role = ({ text, img, onClick }) => {
  return (
    <RoleBox onClick={onClick}>
      <StyledCircle role={text} />
      <Icon size="huge" color="pink" name={img} />
      <StyledText>{text}</StyledText>
    </RoleBox>
  );
};
