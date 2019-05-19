import Vue from "vue";
import firebase from "firebase";

export class App {
  private _firebaseApp: firebase.app.App;

  public get firebaseApp(): firebase.app.App {
    return this._firebaseApp;
  }

  constructor(config: any) {
    this._firebaseApp = firebase.initializeApp(config.firebaseConfig);
  }
}
