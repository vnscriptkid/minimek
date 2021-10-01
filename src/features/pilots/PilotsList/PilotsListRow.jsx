import React from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";
import PropTypes from "prop-types";

function PilotsListRow({ pilot = {}, selected, onPilotClicked = _.noop }) {
  const {
    id = "",
    name = "",
    rank = "",
    age = "",
    gunnery = "",
    piloting = "",
    mechType = "",
  } = pilot;
  return (
    <Table.Row
      active={selected}
      onClick={() => console.log(id) || onPilotClicked(id)}
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
  pilot: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onPilotClicked: PropTypes.func.isRequired,
};

export default PilotsListRow;
