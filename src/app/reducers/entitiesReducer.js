import orm from "app/orm";
import { createReducer } from "common/utils/reducerUtils";
import { DATA_LOADED } from "features/tools/toolConstants";

const initialState = orm.getEmptyState();

export const loadData = (state, payload) => {
  const session = orm.session(state);

  const { Pilot } = session;

  const { pilots } = payload;

  pilots.forEach((pilot) => Pilot.parse(pilot));

  return session.state;
};

export default createReducer(initialState, {
  [DATA_LOADED]: loadData,
});
