const configServer = require("../../api/ts/config/express");
const request = require("supertest");
describe("Post Endpoints", () => {
    it("should create a new post", async() => {
        const res = await request(configServer).get("/");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("get");
    });
});