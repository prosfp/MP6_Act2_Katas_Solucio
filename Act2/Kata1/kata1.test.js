import parImpar from "./kata01";

describe(".evenOdd(number)", () => {
  test('should return "Par" when given 0"', () => {
    expect(parImpar(0)).toBe("Par");
  });

  test('should return "Impar" when given 1', () => {
    expect(parImpar(1)).toBe("Impar");
  });

  test('should return "Par" when given 2', () => {
    expect(parImpar(2)).toBe("Par");
  });

  test('should return "Impar" when given 3', () => {
    expect(parImpar(3)).toBe("Impar");
  });
});
