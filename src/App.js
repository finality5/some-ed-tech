import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Rain from "./assets/images/rain.svg";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const MovedCloud = keyframes`
  0% {
      transform: scale(0.3);
  }
  50% {
      transform:translateX(50px) scale(0.3);
  }
  100%{
      transform:scale(0.3);
  }
`;
const Jump = keyframes`
  0% {
      transform: translateY(0px);
  }
  50% {
      transform:translateY(-50px);
  }
  100%{
      transform:translateY(0px);
  }
`;
const OutSideBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: whitesmoke;
`;

const StyledButton = styled(Button)`
  &.ui.button {
    background: pink;
    transition: 1s ease;
    :hover {
      background: salmon;
      transform: rotate(360deg);
    }
  }
`;

const StyledButton2 = styled(Button)`
  animation: ${Jump} 2s linear infinite;
`;
const StyledCircle = styled.div`
  position: absolute;
  background: greenyellow;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  /* left: 0; */
  transform: translateX(-30%) translateY(-40%);
  transition: 1s;
  :hover {
    transform: scale(1.25);
    cursor: pointer;
  }
`;
const StyledCloud = styled.img`
  transform: scale(0.3) translateX(100%);
  animation: ${MovedCloud} 3s ease infinite both;
  /* animation-name: ${MovedCloud}; */
  /* animation-duration: 3s;
  animation-fill-mode: both;
  animation-iteration-count: infinite; */
`;

class App extends Component {
  render() {
    return (
      <OutSideBox>
        <StyledCircle />
        <StyledCloud src={Rain} />
        <StyledButton>HOVER ME !</StyledButton>
        <StyledButton2
          color="instagram"
          circular={true}
          style={{
            fontSize: "1.25rem",
            fontWeight: "normal",
            boxShadow: "5px 5px whitesmoke",
            position: "absolute",
            left: "1100px",
            top: "40%",
            width: "200px",
            height: "100px",
          }}
        >
        </StyledButton2>
      </OutSideBox>
    );
  }
}

export default App;
