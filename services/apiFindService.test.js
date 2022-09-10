const { apiFindService, apiFindServiceById } = require("./apiFindService");

//to run mock test, uncomment jest.mock and 
//remove .data from all result.data.entries and rest.data.categories
//change expected toHaveLength from 1425 to 10

jest.mock("./apiFindService");

describe("Api Find Service Test", () => {
    test("I should get a listing of 1425 APIs live, 10 mocked", async () => {
        const result = await apiFindService();
        expect(result.entries).toHaveLength(10);
        expect(result.entries[1].Category).toEqual("Animals");
        expect(result.entries[1].API).toEqual("Axolotl");
        expect(result.entries[1].Cors).toEqual("no");
        expect(result.entries[1].HTTPS).toEqual(true);
    });

    test("I should get an API object by Id", async () => {
        const result = await apiFindServiceById("categories");
        expect(result.categories[0]).toEqual("Animals");
        expect(result.categories[1]).toEqual("Anime");
        expect(result.categories[2]).toEqual("Anti-Malware");
        expect(result.categories[3]).toEqual("Art & Design");
    });
});