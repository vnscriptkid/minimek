import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { getWeightClass, selectCurrentMech } from "../mechsSelectors";
import { selectMech } from "../mechsActions";
import orm from "app/orm";

const mapState = (state, ownProps) => {
  const session = orm.session(state.entities);

  const { Mech } = session;

  let mech;

  if (ownProps.mechId) {
    const mechModel = Mech.withId(ownProps.mechId);

    mech = {
      ...mechModel.ref,
      mechType: {},
    };

    if (mechModel.type) {
      mech.mechType = { ...mechModel.type.ref };
    }
  }

  const currentMech = selectCurrentMech(state);

  return { mech, currentMech };
};

const actions = { selectMech };

const MechsListRow = ({ mech = {}, currentMech = null, selectMech }) => {
  const { id = "", mechType = {}, type = "" } = mech;

  const { name = "", weight = "" } = mechType;

  const weightClass = getWeightClass(weight);

  return (
    <Table.Row active={id === currentMech} onClick={() => selectMech(id)}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{type}</Table.Cell>
      <Table.Cell>{weight}</Table.Cell>
      <Table.Cell>{weightClass}</Table.Cell>
    </Table.Row>
  );
};

export default connect(mapState, actions)(MechsListRow);
