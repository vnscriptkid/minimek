import { Table } from "semantic-ui-react";

import MechsListHeader from "./MechsListHeader";
import MechsListRow from "./MechsListRow";

function MechsList({ mechs = [] }) {
  const mechRows = mechs.map((mech) => (
    <MechsListRow mech={mech} key={mech.id} />
  ));

  return (
    <Table celled>
      <MechsListHeader />

      <Table.Body>{mechRows}</Table.Body>
    </Table>
  );
}

export default MechsList;
