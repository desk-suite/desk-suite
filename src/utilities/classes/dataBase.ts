import firebase from "firebase";
import { FirestoreSimpleCollection } from "firestore-simple";
import { DataBaseHelper } from "./dataBaseHelper";
import { Site, ISite } from "../../modulos/app/site";

export class DataBase {
  collections: {
    site: FirestoreSimpleCollection<ISite>;
  };
  constructor(app?: firebase.app.App | undefined) {
    const firestore = firebase.firestore(app);
    const dataBaseHelper = new DataBaseHelper(firestore);
    const db = dataBaseHelper.db;

    this.collections = {
      site: Site.cloudCollection("Sites", db)
    };
  }
}
