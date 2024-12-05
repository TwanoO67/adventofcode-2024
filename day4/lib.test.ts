import { describe, expect, it } from "vitest";
import { countXMAS } from "./lib";

describe("Given", () => {
  describe("When", () => {
    it("Then", () => {

      const input = 
`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

 const count = countXMAS(input);


      expect(count).toBe(18);
    });
  });
});
