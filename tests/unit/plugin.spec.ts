import base from "./basePlugin";

describe("Plugin", () => {
  it("should be 2", () => {
    expect((base.wrapper.vm as any).$add(1, 1)).toBe(2);
  });
});

it('Obtener de Firestore el sitio "Test" correctamente', async () => {
  expect.assertions(1);
  const result = await base.dataBase.collections.site.fetch(
    base.credentials.site.id
  );
  expect(result ? result.name : undefined).toEqual("Test");
});

afterAll(async () => {
  await base.finish();
});
