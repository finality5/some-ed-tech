import styled, { keyframes } from "styled-components";
const MovedCircleNorthWest = keyframes`
  0% {
      opacity:1;
      transform:translateX(0);
  }
  100%{
    opacity:0;
     transform:translateX(-100%) translateY(-100%) ;
  }
`;
const MovedCircleNorthEast = keyframes`
  0% { opacity:1;
      transform:translateX(0);
  }
  100%{opacity:0;
     transform:translateX(100%) translateY(-100%);
  }
`;
const MovedCircleSouthWest = keyframes`
  0% { opacity:1;
      transform:translateX(0);
  }
  40%{
      transform:translateX(-100%);
  }
  100%{opacity:0;
     transform:translateY(100%);
  }
`;
const MovedCircleSouthEast = keyframes`
  0% { opacity:1;
      transform:translateX(0);
  }
  40%{
      transform:translateX(100%);
  }
  70%{
     transform:translateY(100%);
  }
   100%{opacity:0;
     transform:translateX(0);
  }
`;

export const StyledCircle = styled.div`
  background: greenyellow;
  position: absolute;
  height: 1000px;
  width: 1000px;
  border-radius: 50%;
  animation: ${MovedCircleNorthWest} 2.25s linear both;
  :nth-child(2) {
    background: #e056fd;
    animation: ${MovedCircleNorthEast} 2.25s linear both;
  }
  :nth-child(3) {
    background: #7ed6df;
    animation: ${MovedCircleSouthWest} 2.25s linear both;
  }
  :nth-child(4) {
    background: #ff7979;
    animation: ${MovedCircleSouthEast} 2.25s linear both;
  }
`;
