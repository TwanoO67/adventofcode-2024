import { describe, expect, it } from "vitest";
import { countValues, getFirstValue } from "./lib";
import { splitValues } from "../lib/lib";

const example = 
`3   4
4   3
2   5
1   3
3   9
3   3`;
const lines = splitValues(example, '\n');

describe("Given the input", () => {
  describe("When we call the getInput function", () => {
    it("Then we expect an array of string", () => {

      const [_1, _2] = countValues(lines);

      const expected1 = new Map([
        [1, 1],
        [2, 1],
        [3, 3],
        [4, 1],
      ]);

      expect(_1).toStrictEqual(expected1);

      const expected2 = new Map([
        [3, 3],
        [4, 1],
        [5, 1],
        [9, 1],
      ]);
      expect(_2).toStrictEqual(expected2);

    });
  });
});

describe("Given the input", () => {
  describe("When we call the getFirstValue function", () => {
    it("Then we expect a newt list and the current value", () => {

      const map = new Map([
        [3, 2],
        [4, 1],
      ]);
      const returned = getFirstValue(map);

      expect(returned[0]).toStrictEqual(new Map([
        [3, 1],
        [4, 1],
      ]));
      expect(returned[1]).toStrictEqual(3);

      const returned2 = getFirstValue(map);

      expect(returned2[0]).toStrictEqual(new Map([
        [4, 1],
      ]));
      expect(returned2[1]).toStrictEqual(3);

      const returned3 = getFirstValue(map);
      expect(returned3[0]).toStrictEqual(new Map([
      ]));
      expect(returned3[1]).toStrictEqual(4);

    });
  });
});
