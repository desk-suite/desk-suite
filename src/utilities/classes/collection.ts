import { FirestoreSimple, FirestoreSimpleCollection } from "firestore-simple";
import { DataBaseHelper } from "./dataBaseHelper";

export interface ICollection {
  id: string;
}

export class Collection<T extends ICollection> implements ICollection {
  // Propiedades
  id: string = "";

  // Metodos
  // public getFromCloud(id: string) {
  //   this.cloudCollection.fetch(id);
  // }

  public static cloudCollection<U extends ICollection>(
    path: string,
    db: FirestoreSimple
  ): FirestoreSimpleCollection<U> {
    return db.collection<U>({ path });
  }
}
