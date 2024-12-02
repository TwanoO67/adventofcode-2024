---
to: day<%= day %>/part-1.test.ts
---
import { describe, expect, it } from "vitest";
import { main } from "./part-1";

const exampleInput = ``;

describe("Day <%= day %> Part 1", () => {
  describe("Test the global main function", () => {
    it("should return true", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(true);
    });
  });
});
