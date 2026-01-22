const request = require("supertest");
const app = require("../src/index");

describe("API Endpoints", () => {
  test("GET / debe responder correctamente", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API Node.js funcionando 🚀");
  });

  test("GET /health debe responder estado ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});
