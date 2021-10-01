import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";

import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";
import orm from "app/orm";
import { connect } from "react-redux";

const mapState = (state) => {
  const session = orm.session(state.entities);
  const { Pilot } = session;

  const pilotIds = Pilot.all()
    .toModelArray()
    .map((pilotModel) => pilotModel.getId());

  return { pilotIds };
};

function PilotsList({ pilotIds = [] }) {
  const pilotRows = pilotIds.map((pilotId) => (
    <PilotsListRow key={pilotId} pilotId={pilotId} />
  ));

  return (
    <Table celled>
      <PilotsListHeader />
      <Table.Body>{pilotRows}</Table.Body>
    </Table>
  );
}

PilotsList.propTypes = {
  pilotIds: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapState)(PilotsList);
