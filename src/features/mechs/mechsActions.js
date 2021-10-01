import { MECH_SELECT } from "./mechsConstants";

export const selectMech = (mechId) => {
  return {
    type: MECH_SELECT,
    payload: { currentMech: mechId },
  };
};
