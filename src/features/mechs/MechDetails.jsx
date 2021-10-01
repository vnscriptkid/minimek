import { Form } from "semantic-ui-react";

function MechDetails({ mech = {} }) {
  const { id = "", mechType = {}, type = "" } = mech;

  const { name = "", weight = "" } = mechType;

  return (
    <Form size="large">
      <Form.Field name="id" width={6}>
        <label>ID</label>
        <input placeholder="ID" value={id} />
      </Form.Field>
      <Form.Field name="name" width={16}>
        <label>Name</label>
        <input placeholder="Name" value={name} />
      </Form.Field>
      <Form.Field name="model" width={6}>
        <label>Model</label>
        <input placeholder="Model" value={type} />
      </Form.Field>
      <Form.Field name="weight" width={6}>
        <label>Weight</label>
        <input value={weight} />
      </Form.Field>
      <Form.Field name="class" width={6}>
        <label>Class</label>
        <input value={weight} />
      </Form.Field>
    </Form>
  );
}

export default MechDetails;
