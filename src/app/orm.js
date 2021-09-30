import { ORM } from "redux-orm";
import Pilot from "features/pilots/Pilot";

const orm = new ORM();

function proxyClassForORM(klass) {
  return new Proxy(klass, {
    apply(target, thisArg, rest) {
      return new target(...rest);
    },
  });
}

orm.register(proxyClassForORM(Pilot));

export default orm;
