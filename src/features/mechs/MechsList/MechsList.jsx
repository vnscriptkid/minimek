import orm from "app/orm";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";

import MechsListHeader from "./MechsListHeader";
import MechsListRow from "./MechsListRow";

const mapState = (state) => {
  const session = orm.session(state.entities);

  const { Mech } = session;

  const mechIds = Mech.all()
    .toModelArray()
    .map((mechModel) => mechModel.getId());

  return { mechIds };
};

function MechsList({ mechIds = [] }) {
  const mechRows = mechIds.map((mechId) => (
    <MechsListRow mechId={mechId} key={mechId} />
  ));

  return (
    <Table celled>
      <MechsListHeader />

      <Table.Body>{mechRows}</Table.Body>
    </Table>
  );
}

export default connect(mapState)(MechsList);
