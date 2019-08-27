import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { Grid, Container } from "semantic-ui-react";

const App = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <SongList />
          </Grid.Column>
          <Grid.Column width={8}>
            <SongDetail />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default App;
