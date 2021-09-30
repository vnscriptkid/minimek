import orm from "app/orm";
import { createReducer } from "common/utils/reducerUtils";

const initialState = orm.getEmptyState();

export default createReducer(initialState, {});
