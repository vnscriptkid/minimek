import { useState } from "react";

import { Grid, Segment, Header } from "semantic-ui-react";

import PilotDetails from "./PilotDetails";
import PilotsList from "./PilotsList/PilotsList";

const initialPilots = [
  {
    name: "Natasha Kerensky",
    rank: "Captain",
    age: 52,
    gunnery: 2,
    piloting: 3,
    mechType: "WHM-6R",
  },
];

function Pilots() {
  const [pilots] = useState(initialPilots);

  const currentPilot = pilots[0] || {};

  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Pilot List</Header>
          <PilotsList pilots={pilots} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Pilot Details</Header>
          <Segment>
            <PilotDetails pilot={currentPilot} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default Pilots;
