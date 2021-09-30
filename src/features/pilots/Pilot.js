import { Model } from "redux-orm";

export default class Pilot extends Model {
  static modelName = "Pilot";

  static parse(pilotData) {
    // Handle relations here
    return this.create(pilotData);
  }
}
