import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  unitInfo: unitInfoReducer,
  entities: entitiesReducer,
});

export default rootReducer;
