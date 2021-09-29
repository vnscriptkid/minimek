import tabsReducer from "features/tabs/tabsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tabs: tabsReducer,
});

export default rootReducer;
