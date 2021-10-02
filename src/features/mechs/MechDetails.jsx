import orm from "app/orm";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import { selectCurrentMech } from "./mechsSelectors";

const mapState = (state) => {
  let mech;

  let currentMechId = selectCurrentMech(state);

  const session = orm.session(state.entities);
  const { Mech } = session;

  if (Mech.idExists(currentMechId)) {
    const mechModel = Mech.withId(currentMechId);

    mech = {
      ...mechModel.ref,
      mechType: {},
    };

    if (mechModel.type) {
      mech.mechType = { ...mechModel.type.ref };
    }
  }

  return { mech };
};

function MechDetails({ mech = {} }) {
  const { id = "", mechType = {}, type = "" } = mech;

  const { name = "", weight = "" } = mechType;

  return (
    <Form size="large">
      <Form.Field name="id" width={6}>
        <label>ID</label>
        <input disabled={true} placeholder="ID" value={id} />
      </Form.Field>
      <Form.Field name="name" width={16}>
        <label>Name</label>
        <input disabled={true} placeholder="Name" value={name} />
      </Form.Field>
      <Form.Field name="model" width={6}>
        <label>Model</label>
        <input disabled={true} placeholder="Model" value={type} />
      </Form.Field>
      <Form.Field name="weight" width={6}>
        <label>Weight</label>
        <input disabled={true} value={weight} />
      </Form.Field>
      <Form.Field name="class" width={6}>
        <label>Class</label>
        <input disabled={true} value={weight} />
      </Form.Field>
    </Form>
  );
}

export default connect(mapState)(MechDetails);
