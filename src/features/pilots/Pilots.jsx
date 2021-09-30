import orm from "app/orm";
import { useState } from "react";
import { connect } from "react-redux";

import { Grid, Segment, Header } from "semantic-ui-react";

import PilotDetails from "./PilotDetails";
import PilotsList from "./PilotsList/PilotsList";

const mapState = (state) => {
  const session = orm.session(state.entities);

  const { Pilot } = session;

  const pilots = Pilot.all().toRefArray();

  return { pilots };
};

function Pilots({ pilots }) {
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

export default connect(mapState)(Pilots);
