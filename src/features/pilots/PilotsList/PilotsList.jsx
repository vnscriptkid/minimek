import { Table } from "semantic-ui-react";

import { listOfPilots } from "../proptypes";
import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";

function PilotsList({ pilots = [] }) {
  const pilotRows = pilots.map((pilot) => (
    <PilotsListRow pilot={pilot} key={pilot.name} />
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
};

export default PilotsList;
