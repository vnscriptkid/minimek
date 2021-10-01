import { PILOT_SELECT } from "./pilotsConstants";

export const selectPilot = (pilotId) => {
  return {
    type: PILOT_SELECT,
    payload: { currentPilot: pilotId },
  };
};
