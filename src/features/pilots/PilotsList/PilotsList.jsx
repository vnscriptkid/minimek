import { Table } from "semantic-ui-react";
import PropTypes from "prop-types";

import { listOfPilots } from "../proptypes";
import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";

function PilotsList({ pilots = [], onPilotClicked, currentPilot }) {
  const pilotRows = pilots.map((pilot) => (
    <PilotsListRow
      key={pilot.name}
      pilot={pilot}
      selected={pilot.id === currentPilot}
      onPilotClicked={onPilotClicked}
    />
  ));

  return (
    <Table celled>
      <PilotsListHeader />
      <Table.Body>{pilotRows}</Table.Body>
    </Table>
  );
}

PilotsList.propTypes = {
  pilots: listOfPilots,
  onPilotClicked: PropTypes.func.isRequired,
  currentPilot: PropTypes.number,
};

export default PilotsList;
