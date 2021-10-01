import orm from "app/orm";
import { connect } from "react-redux";
import { Grid, Segment, Header } from "semantic-ui-react";
import MechDetails from "./MechDetails";
import { selectMech } from "./mechsActions";
import MechsList from "./MechsList";
import { selectCurrentMech } from "./mechsSelectors";
import PropTypes from "prop-types";

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

  const currentMech = selectCurrentMech(state);

  return { mechs, currentMech };
};

const actions = { selectMech };

const Mechs = ({ mechs = [], currentMech, selectMech }) => {
  const currentMechEntry = mechs.find((m) => m.id === currentMech) || {};

  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Mechs List</Header>
          <MechsList
            mechs={mechs}
            currentMech={currentMech}
            onMechClicked={selectMech}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Mech Details</Header>
          <Segment>
            <MechDetails mech={currentMechEntry} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

Mechs.propTypes = {
  mechs: PropTypes.array.isRequired,
  currentMech: PropTypes.number,
  selectMech: PropTypes.func.isRequired,
};

export default connect(mapState, actions)(Mechs);
