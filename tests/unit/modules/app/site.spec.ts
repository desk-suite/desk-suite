import { dataBase, finish } from "../../basePlugin";
import { Site } from "../../../../src/modulos/app/site";
import { database } from "firebase";

let resultAdd: string;
const addOp = () =>
  dataBase.collections.site.add({
    name: "Test-Site",
    logoURL: ""
  });
let resultDelete: string;
const deleteOp = () => dataBase.collections.site.delete(resultAdd);

it("Verificar propiedades por defecto", () => {
  const site = new Site();
  expect(site.id).toEqual("");
  expect(site.name).toEqual("");
  expect(site.logoURL).toEqual("");
});

it("Add Site in Collection of Firestore", async () => {
  expect.assertions(1);
  resultAdd = await addOp();
  expect(typeof resultAdd).toBe("string");
});
it("Delete Site in Collection of Firestore", async () => {
  expect.assertions(1);
  resultDelete = await deleteOp();
  expect(typeof resultDelete).toBe("string");
});

afterAll(async () => {
  await finish();
});
