import React from "react";
import { connect } from "react-redux";
import { Form, Dropdown, Segment } from "semantic-ui-react";
import { selectUnitInfo } from "./unitInfoSelectors";
import { updateUnitInfo } from "./unitInfoActions";
import { getValueFromEvent } from "common/utils/clientUtils";

const FACTIONS = [
  { value: "cc", text: "Capellan Confederation" },
  { value: "dc", text: "Draconis Combine" },
  { value: "fs", text: "Federated Suns" },
  { value: "fwl", text: "Free Worlds League" },
  { value: "lc", text: "Lyran Commonwealth" },
];

const mapState = (state) => ({
  unitInfo: selectUnitInfo(state),
});

const actions = { updateUnitInfo };

const UnitInfo = ({ unitInfo = {}, updateUnitInfo }) => {
  const { name, affiliation } = unitInfo;

  const onAffiliationChange = (e, result) => {
    const { name, value } = result;
    const newValues = { [name]: value };
    updateUnitInfo(newValues);
  };

  const onNameChange = (e) => {
    const newValues = getValueFromEvent(e);
    updateUnitInfo(newValues);
  };

  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field name="name" width={6}>
          <label>Unit Name</label>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={onNameChange}
          />
        </Form.Field>
        <Form.Field name="affiliation" width={6}>
          <label>Affiliation</label>
          <Dropdown
            name="affiliation"
            selection
            options={FACTIONS}
            value={affiliation}
            onChange={onAffiliationChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default connect(mapState, actions)(UnitInfo);
