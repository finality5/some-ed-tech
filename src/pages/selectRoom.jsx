import React, { Component } from "react";
import styled from "styled-components";
import { Search, Button, Grid, Header, Segment } from "semantic-ui-react";
import { FlexRow } from "../components/sharedComponents";
const OutSideBox = styled(FlexRow)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class SelectRoom extends Component {
  state = { value: "" };
  constructor(props) {
    super(props);
    document.getElementById("body").className = "darkTheme";
  }
  handleSearchChange = (e) => {
    this.setState({ value: e.currentTarget.value });
  };
  render() {
    return (
      <OutSideBox>
        <Search
          showNoResults={false}
          //   loading={true}
          // onResultSelect={(e, data) =>
          //   dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
          // }
          onSearchChange={this.handleSearchChange}
          results={[
            {
              title: "Senger, Fay and Balistreri",
              description: "Secured bottom-line intranet",
              image:
                "https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg",
              price: "$46.13",
            },
            {
              title: "Senger, Fay and Balistreri",
              description: "Secured bottom-line intranet",
              image:
                "https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg",
              price: "$46.ffff13",
              what: 111,
            },
          ]}
          value={this.state.value}
        />
        <Button color="linkedin" style={{ marginTop: "3rem" }}>
          + ADD SUBJECT
        </Button>
        <Button color="linkedin" style={{ marginTop: "3rem" }}>
          JOIN MEETING WITH THE CODE
        </Button>
      </OutSideBox>
    );
  }
}

export default SelectRoom;
