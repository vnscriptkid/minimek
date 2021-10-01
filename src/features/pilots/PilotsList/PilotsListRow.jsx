import React from "react";
import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import orm from "app/orm";
import { selectPilot } from "../pilotsActions";
import { selectCurrentPilot } from "../pilotsSelectors";

const mapState = (state, ownProps) => {
  const session = orm.session(state.entities);

  const { Pilot } = session;

  let pilot;

  if (Pilot.idExists(ownProps.pilotId)) {
    const pilotModel = Pilot.withId(ownProps.pilotId);

    pilot = { ...pilotModel.ref };

    const { mech } = pilotModel;

    if (mech && mech.type) {
      pilot.mechType = mech.type.id;
    }
  }

  const currentPilot = selectCurrentPilot(state);

  return { pilot, currentPilot };
};

const actions = { selectPilot };

function PilotsListRow({ pilot = {}, currentPilot, selectPilot, pilotId }) {
  const {
    name = "",
    rank = "",
    age = "",
    gunnery = "",
    piloting = "",
    mechType = "",
  } = pilot;
  return (
    <Table.Row
      active={currentPilot === pilotId}
      onClick={() => selectPilot(pilotId)}
    >
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{rank}</Table.Cell>
      <Table.Cell>{age}</Table.Cell>
      <Table.Cell>
        {gunnery}/{piloting}
      </Table.Cell>
      <Table.Cell>{mechType}</Table.Cell>
    </Table.Row>
  );
}

PilotsListRow.propTypes = {
  pilotId: PropTypes.object.isRequired,
  selectPilot: PropTypes.func.isRequired,
  currentPilot: PropTypes.string.isRequired,
};

export default connect(mapState, actions)(PilotsListRow);
