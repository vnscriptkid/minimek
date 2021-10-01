import { Grid, Segment, Header } from "semantic-ui-react";

import PilotDetails from "./PilotDetails";
import PilotsList from "./PilotsList/PilotsList";

function Pilots() {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Pilot List</Header>
          <PilotsList />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Pilot Details</Header>
          <Segment>
            <PilotDetails />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Pilots;
