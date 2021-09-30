import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tabs: tabsReducer,
  unitInfo: unitInfoReducer,
});

export default rootReducer;
