import { dataBase, finish } from "../../basePlugin";
import { Site, ISite } from "../../../../src/modulos/app/site";

let resultAdd: string;
const addOp = () =>
  dataBase.collections.site.add({
    name: "Test-Site",
    logoURL: ""
  });

let resultGet: ISite | undefined;
const getOp = (value: string) => dataBase.collections.site.fetch(value);

let resultUpdate: string;
const updateOp = (value: ISite | undefined) =>
  dataBase.collections.site.set(value as ISite);

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
  console.log(resultAdd);
  expect(typeof resultAdd).toBe("string");
});

it("Get Site in Collection of Firestore", async () => {
  resultGet = await getOp(resultAdd);
  if (resultGet) {
    console.log(resultGet.id);
  }
  expect(resultGet).not.toBeUndefined;
});

it("Update Site in Collection of Firestore", async () => {
  expect.assertions(1);
  resultUpdate = await updateOp(resultGet);
  console.log(resultUpdate);
  expect(typeof resultUpdate).toBe("string");
});

it("Delete Site in Collection of Firestore", async () => {
  expect.assertions(1);
  resultDelete = await deleteOp();
  expect(typeof resultDelete).toBe("string");
});

it("Final Result", () => {
  expect(
    resultAdd === resultGet!.id &&
      resultAdd === resultUpdate &&
      resultUpdate === resultDelete
  ).toBe(true);
});

afterAll(async () => {
  await finish();
});
