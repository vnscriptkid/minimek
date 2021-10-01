import mechsReducer from "features/mechs/mechsReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  unitInfo: unitInfoReducer,
  entities: entitiesReducer,
  pilots: pilotsReducer,
  mechs: mechsReducer,
});

export default rootReducer;
