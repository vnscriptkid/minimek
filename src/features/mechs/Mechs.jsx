import { Grid, Segment, Header } from "semantic-ui-react";
import MechDetails from "./MechDetails";
import MechsList from "./MechsList";

const Mechs = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Mechs List</Header>
          <MechsList />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Mech Details</Header>
          <Segment>
            <MechDetails />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Mechs;
