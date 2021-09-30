import { connect } from "react-redux";
import { Segment, Button } from "semantic-ui-react";

import { loadUnitData } from "./toolActions";

const actions = { loadUnitData };

function Tools({ loadUnitData }) {
  return (
    <Segment attached="bottom">
      <Button onClick={loadUnitData}>Reload Unit Data</Button>
    </Segment>
  );
}

export default connect(null, actions)(Tools);
