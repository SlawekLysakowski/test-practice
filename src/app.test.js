const supertest = require("supertest");
const app = require("./app");

const request = supertest(app);

describe("/test endpoint", () => {
  it("testy wykonały się: ", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });
});
