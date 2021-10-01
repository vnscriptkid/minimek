import { createReducer } from "common/utils/reducerUtils";
import { MECH_SELECT } from "./mechsConstants";

const initialState = {
  currentMech: null,
};

export const selectMech = (state, payload) => {
  const prevSelectedMech = state.currentMech;
  const newSelectedMech = payload.currentMech;

  const isSame = prevSelectedMech === newSelectedMech;

  return {
    currentMech: isSame ? null : newSelectedMech,
  };
};

export default createReducer(initialState, {
  [MECH_SELECT]: selectMech,
});
