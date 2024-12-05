import { describe, expect, it } from "vitest";
import { countCrossMAS, countXMAS } from "./lib";

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


describe("Given", () => {
  describe("When", () => {
    it("Then", () => {

      const input = 
`.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........`;

      const count = countCrossMAS(input);
      expect(count).toBe(9);
    });
  });
});