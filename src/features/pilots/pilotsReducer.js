import { PILOT_SELECT } from "./pilotsConstants";

const { createReducer } = require("common/utils/reducerUtils");

const initialState = {
  currentPilot: null,
};

const selectPilot = (state, payload) => {
  const prevSelectedPilot = state.currentPilot;
  const newSelectedPilot = payload.currentPilot;

  const isSamePilot = prevSelectedPilot === newSelectedPilot;

  return {
    currentPilot: isSamePilot ? null : newSelectedPilot,
  };
};

export default createReducer(initialState, {
  [PILOT_SELECT]: selectPilot,
});
