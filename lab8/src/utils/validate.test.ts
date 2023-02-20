import { validate } from "./validate";

describe("test validate function", () => {
    it("should return 'Contraseña válida' for '3128Bwjiu-.w,'", () => {
        expect(validate("3128Bwjiu-.w,")).toBe("Contraseña válida");
    });
    it("should return 'El número mínimo de caracteres debe de ser 8' for '123'", () => {
        expect(validate("123")).toBe("El número mínimo de caracteres debe de ser 8");
    });
});
