import firebase from "firebase";
import { FirestoreSimple } from "firestore-simple";

export class DataBaseHelper {
  // Propiedades
  public db: FirestoreSimple;

  // Constructor
  constructor(firestore: firebase.firestore.Firestore) {
    this.db = new FirestoreSimple(firestore);
  }
}
