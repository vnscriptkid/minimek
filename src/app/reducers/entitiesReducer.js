import orm from "app/orm";
import { createReducer } from "common/utils/reducerUtils";
import { DATA_LOADED } from "features/tools/toolConstants";

const initialState = orm.getEmptyState();

export const loadData = (state, payload) => {
  const session = orm.session(state);

  const { Pilot, Mech, MechDesign } = session;

  const { pilots, designs, mechs } = payload;

  pilots.forEach((pilot) => Pilot.parse(pilot));
  designs.forEach((design) => MechDesign.parse(design));
  mechs.forEach((mech) => Mech.parse(mech));

  return session.state;
};

export default createReducer(initialState, {
  [DATA_LOADED]: loadData,
});
