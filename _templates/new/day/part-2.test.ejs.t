---
to: day<%= day %>/part-2.test.ts
---
import { describe, expect, it } from "vitest";
import { main } from "./part-2";

const exampleInput = ``;

describe("Day <%= day %> Part 2", () => {
  describe("Test the global main function", () => {
    it("should return true", async () => {
      const result = await main(exampleInput);
      expect(result).toBe(true);
    });
  });
});
