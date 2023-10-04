import formatToCurrency from ".";

describe("formatToCurrency", () => {
  it("should format a value to Brazilian currency (BRL)", () => {
    const formattedValue = formatToCurrency(1000);
    expect(formattedValue).toBe("R$ 1.000,00");
  });

  it("should format a decimal value to Brazilian currency (BRL)", () => {
    const formattedValue = formatToCurrency(1234.56);
    expect(formattedValue).toBe("R$ 1.234,56");
  });

  it("should format a negative value to Brazilian currency (BRL)", () => {
    const formattedValue = formatToCurrency(-789.12);
    expect(formattedValue).toBe("-R$ 789,12");
  });

  it("should format a large value to Brazilian currency (BRL)", () => {
    const formattedValue = formatToCurrency(1000000);
    expect(formattedValue).toBe("R$ 1.000.000,00");
  });
});
