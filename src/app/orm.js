import { ORM } from "redux-orm";
import Pilot from "features/pilots/Pilot";
import MechDesign from "features/mechs/MechDesign";
import Mech from "features/mechs/Mech";

const orm = new ORM();

function proxyClassForORM(klass) {
  return new Proxy(klass, {
    apply(target, thisArg, rest) {
      return new target(...rest);
    },
  });
}

orm.register(proxyClassForORM(Pilot));
orm.register(proxyClassForORM(MechDesign));
orm.register(proxyClassForORM(Mech));

export default orm;
