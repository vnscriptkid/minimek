import orm from "app/orm";
import { connect } from "react-redux";
import { Grid, Segment, Header } from "semantic-ui-react";
import MechDetails from "./MechDetails";
import MechsList from "./MechsList";

const mapState = (state) => {
  const session = orm.session(state.entities);

  const { Mech } = session;

  const mechs = Mech.all()
    .toModelArray()
    .map((mechModel) => {
      const mech = {
        ...mechModel.ref,
        mechType: {},
      };

      if (mechModel.type) {
        mech.mechType = { ...mechModel.type.ref };
      }

      return mech;
    });

  return { mechs };
};

const Mechs = ({ mechs = [] }) => {
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

export default connect(mapState)(Mechs);
