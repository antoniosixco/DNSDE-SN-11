const request = require("supertest");
const app = require("../src/server");

// --- DEFINICIÓN DE FUNCIONES PARA LOS TESTS ---
const sumar = (a, b) => a + b;
const calcularIva = (monto) => monto * 0.13; // 
const esPrecioValido = (precio) => precio > 0 && typeof precio === 'number';

describe("API Endpoints", () => {
  // ✅ Prueba que PASA
  test("GET / debe responder correctamente", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("API Grupo SN-11 - Prueba para video");
});

  // ✅ Prueba 2 (Ajustada al nuevo estándar)
  test("2. GET /health debe responder estado UP", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("UP"); // actualizado a "UP"
    expect(res.body).toHaveProperty("timestamp"); 
  });

  // ❌ Validación de ERROR
  test("GET /ruta-inexistente debe retornar 404", async () => {
    const res = await request(app).get("/ruta-inexistente");
    expect(res.statusCode).toBe(404);
  });
  // --- Nuevos test  ---

  // Lógica Matemática
  test("4. Matemática: sumar 10 + 20 debe ser 30", () => {
    expect(sumar(10, 20)).toBe(30);
  });

  test("5. Matemática: sumar valores negativos", () => {
    expect(sumar(-5, -5)).toBe(-10);
  });

  // Lógica de Negocio (IVA)
  test("6. Negocio: calcular IVA de 100 debe ser 13", () => {
    expect(calcularIva(100)).toBe(13);
  });

  test("7. Negocio: calcular IVA de 0 debe ser 0", () => {
    expect(calcularIva(0)).toBe(0);
  });

  // Validaciones
  test("8. Validación: un precio de 50 es válido", () => {
    expect(esPrecioValido(50)).toBe(true);
  });

  test("9. Validación: un precio de -10 no es válido", () => {
    expect(esPrecioValido(-10)).toBe(false);
  });

  test("10. Validación: un texto no es un precio válido", () => {
    expect(esPrecioValido("cien")).toBe(false);
});
});
