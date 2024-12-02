import { describe, expect, it } from "vitest";
import { isSafe } from "./lib";

describe("Given the function isSafe", () => {
  describe("When levels are not all increasing", () => {
    it("Then should respond true if all levels are increasing", () => {
      const reportIncreasing = '1 3 6 7 9';
      expect(isSafe(reportIncreasing)).toBe(true);
    });

    it("Then should respond false if all levels are not increasing", () => {
      const reportNotIncreasing = '1 2 7 8 4';
      expect(isSafe(reportNotIncreasing)).toBe(false);
    });
  });

  describe("When levels are not all decreasing", () => {
    it("Then should respond true if all levels are decreasing", () => {
      const reportDecreasing = '9 8 7 4 1';
      expect(isSafe(reportDecreasing)).toBe(true);
    });

    it("Then should respond false, if all levels are not decreasing", () => {
      const reportNotDecreasing = '9 8 7 8 9';
      expect(isSafe(reportNotDecreasing)).toBe(false);
    });
  });

  describe("When levels are not all stepped", () => {
    it("Then should respond true if all levels are stepped", () => {
      const reportStepped = '1 2 4 6 9';
      expect(isSafe(reportStepped)).toBe(true);
    });

    it("Then should respond false, if all levels are equal", () => {
      const reportNotStepped = '1 2 2 2 3';
      expect(isSafe(reportNotStepped)).toBe(false);
    });

    it("Then should respond false, if all levels are too far apart", () => {
      const reportNotStepped = '1 2 3 4 9';
      expect(isSafe(reportNotStepped)).toBe(false);
    });
  });
});
