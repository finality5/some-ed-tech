import styled, { keyframes } from "styled-components";
const MovedCircleNorthWest = keyframes`
  0% {
      opacity:0.5;
      transform:translateX(0);
  }
  100%{
    opacity:0;
     transform:translateX(-100%) translateY(-100%) ;
  }
`;
const MovedCircleNorthEast = keyframes`
  0% { opacity:0.5;
      transform:translateX(0);
  }
  100%{opacity:0;
     transform:translateX(100%) translateY(-100%);
  }
`;
const MovedCircleSouthWest = keyframes`
  0% { opacity:0.5;
      transform:translateX(0);
  }
  40%{
      transform:translateX(-100%);
  }
  100%{opacity:0;
     transform:translateY(60%);
  }
`;
const MovedCircleSouthEast = keyframes`
  0% { opacity:0.5;
      transform:translateX(0);
  }
  40%{
      transform:translateX(100%);
  }
  70%{
     transform:translateY(60%);
  }
   100%{opacity:0;
     transform:translateX(0);
  }
`;

export const StyledCircle = styled.div`
  /* display: ${(props) => (props.checkOverflowY ? "static" : "none")}; */
  background: greenyellow;
  position: absolute;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  animation: ${MovedCircleNorthWest} 1s linear both;
  :nth-child(2) {
    background: #e056fd;
    animation: ${MovedCircleNorthEast} 1s linear both;
  }
  :nth-child(3) {
    background: #7ed6df;
    animation: ${MovedCircleSouthWest} 1s linear both;
  }
  :nth-child(4) {
    background: #ff7979;
    animation: ${MovedCircleSouthEast} 1s linear both;
  }
`;
