import { ORM } from "redux-orm";
import Pilot from "features/pilots/Pilot";
import MechDesign from "features/mechs/MechDesign";
import Mech from "features/mechs/Mech";

const orm = new ORM();

orm.register(Pilot);
orm.register(MechDesign);
orm.register(Mech);

export default orm;
