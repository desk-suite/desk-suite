import { Collection, ICollection } from "../../utilities/classes/collection";

export interface ISite extends ICollection {
  name: string;
  logoURL: string;
}

export class Site extends Collection<ISite> implements ISite {
  // Propiedades
  id: string = "";
  name: string = "";
  logoURL: string = "";
}
