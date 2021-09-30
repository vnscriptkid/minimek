import { useState } from "react";
import { Grid, Segment, Header } from "semantic-ui-react";
import MechDetails from "./MechDetails";
import MechsList from "./MechsList";

const initialMechs = [
  {
    id: 1,
    name: "Warhammer",
    type: "WHM-6R",
    weight: 70,
  },
];

const Mechs = () => {
  const [mechs] = useState(initialMechs);

  const currentMech = mechs[0] || {};

  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Mechs List</Header>
          <MechsList mechs={mechs} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Mech Details</Header>
          <Segment>
            <MechDetails mech={currentMech} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Mechs;
