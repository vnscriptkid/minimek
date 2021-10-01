import _ from "lodash";
import { Table } from "semantic-ui-react";
import { getWeightClass } from "../mechsSelectors";

const MechsListRow = ({
  mech = {},
  currentMech = null,
  onMechClicked = _.noop,
}) => {
  const { id = "", mechType = {}, type = "" } = mech;

  const { name = "", weight = "" } = mechType;

  const weightClass = getWeightClass(weight);

  return (
    <Table.Row active={id === currentMech} onClick={() => onMechClicked(id)}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{type}</Table.Cell>
      <Table.Cell>{weight}</Table.Cell>
      <Table.Cell>{weightClass}</Table.Cell>
    </Table.Row>
  );
};

export default MechsListRow;
