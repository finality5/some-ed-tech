import React, { Component } from "react";
import styled from "styled-components";
import { Button, Divider } from "semantic-ui-react";
const SurveyZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  background-color: rgba(129, 236, 236, 0.5);
  border-top: solid 3px #636e72;
  border-bottom: solid 9px #2d3436;
  border-radius: 3rem 0rem 3rem 0rem;
  margin: 1rem 0rem;
`;
const SurveyQuestion = styled.div`
  height: 150px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0rem;
  padding: 2rem 0rem;
  background: white;
  border-radius: 2rem;
  z-index: 0.5;
`;
const TopicQuestion = styled.h3`
  display: flex;
  justify-content: center;
`;
const ChoicesZone = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
class Survey extends Component {
  state = {};
  render() {
    return (
      <SurveyZone>
        <SurveyQuestion>
          <TopicQuestion>{this.props.question}</TopicQuestion>
          <Divider style={{ width: "80%" }} />
          <ChoicesZone>
            {this.props.choices.map((choice) => (
              <Button color={choice.color}>{choice.text}</Button>
            ))}
          </ChoicesZone>
        </SurveyQuestion>
      </SurveyZone>
    );
  }
}

export default Survey;
