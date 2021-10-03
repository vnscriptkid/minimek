import { createReducer } from "common/utils/reducerUtils";
import { DATA_LOADED } from "features/tools/toolConstants";
import _ from "lodash";
import { UNIT_INFO_UPDATE } from "./unitInfoConstants";

const initialState = {
  name: "N/A",
  affiliation: "",
};

const dataLoaded = (state, payload) => payload.unit;

const updateUnitInfo = (state, payload) => {
  const updates = _.pick(payload, ["name", "affiliation"]);

  return { ...state, ...updates };
};

export default createReducer(initialState, {
  [DATA_LOADED]: dataLoaded,
  [UNIT_INFO_UPDATE]: updateUnitInfo,
});
