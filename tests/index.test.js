const request = require("supertest");
const app = require("../src/server");

describe("API Endpoints", () => {
  // ✅ Prueba que PASA
  test("GET / debe responder correctamente", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API Node.js funcionando 🚀");
  });

  // ✅ Prueba que PASA
  test("GET /health debe responder estado ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  // ❌ Validación de ERROR
  test("GET /ruta-inexistente debe retornar 404", async () => {
    const res = await request(app).get("/ruta-inexistente");
    expect(res.statusCode).toBe(404);
  });
});
