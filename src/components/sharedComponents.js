import styled, { keyframes } from "styled-components";
const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Woop = keyframes`
  0% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-bottom: 2px solid white;
  border-top: 2px solid whitesmoke;
  border-left: 2px solid white;
  background: transparent;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FadeIn = keyframes`
  0% {
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;
export const FadeOut = keyframes`
  0% {
    opacity:1;
  }
  100%{
    opacity:0;
  }
`;

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
  100%{
        opacity:0;
        transform:translateY(60%);
  }
`;
const MovedCircleSouthEast = keyframes`
  0% { 
        opacity:0.5;
        transform:translateX(0);
  }
  40%{
        transform:translateX(100%);
  }
  70%{
        transform:translateY(60%);
  }
   100%{
        opacity:0;
        transform:translateX(0);
  }
`;
export const StyledCircle = styled.div`
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
