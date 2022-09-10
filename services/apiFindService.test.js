const { apiFindService, apiFindServiceById } = require("./apiFindService");

jest.mock("./apiFindService");

describe("Api Find Service Test", () => {
    //I should get a listing of 1425 APIs
    test("I should get a listing of 10 APIs", async () => {
        const result = await apiFindService();
        //expect(result.data.entries).toHaveLength(1425);
        expect(result.data).toHaveLength(10);
        expect(result.data[1].Category).toEqual("Animals");
        expect(result.data[1].API).toEqual("Axolotl");
        expect(result.data[1].Cors).toEqual("no");
        expect(result.data[1].HTTPS).toEqual(true);
    });

    test("I should get an API object by Id", async () => {
        const result = await apiFindServiceById("categories");
        expect(result.categories[0]).toEqual("Animals");
        expect(result.categories[1]).toEqual("Anime");
        expect(result.categories[2]).toEqual("Anti-Malware");
        expect(result.categories[3]).toEqual("Art & Design");
    });
});