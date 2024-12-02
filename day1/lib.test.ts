import { describe, expect, it } from "vitest";
import { countValues, getAppearanceScore, getDiff, getFirstValue } from "./lib";
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
      expect(_1.entries().next().value).toStrictEqual([1, 1]);

      const expected2 = new Map([
        [3, 3],
        [4, 1],
        [5, 1],
        [9, 1],
      ]);
      expect(_2).toStrictEqual(expected2);
      expect(_2.entries().next().value).toStrictEqual([3, 3]);

    });
  });
});

describe("Given the input", () => {
  describe("When we call the getFirstValue function", () => {
    it("Then we expect a new list and the current value", () => {

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


describe("Given the input", () => {
  describe("When we call the getDiff function", () => {
    it("Then we expect 2 new list decreased and the diff number", () => {

      const list1 = new Map([
        [1, 1],
        [2, 1],
        [3, 3],
        [4, 1],
      ]);

      const list2 = new Map([
        [3, 3],
        [4, 1],
        [5, 1],
        [9, 1],
      ]);

      const [newList1, newList2, diff] = getDiff(list1, list2);

      const expected1 = new Map([
        [2, 1],
        [3, 3],
        [4, 1],
      ]);
      const expected2 = new Map([
        [3, 2],
        [4, 1],
        [5, 1],
        [9, 1],
      ]);
      expect(newList1).toStrictEqual(expected1);
      expect(newList2).toStrictEqual(expected2);
      expect(diff).toStrictEqual(2);

    });
  });
});

describe("Given the input", () => {
  describe("When we call the getAppearanceScore function", () => {
    it("Then we expect to have the number * countInlist1 * countInLIst2", () => {

      const list2 = new Map([
        [1, 1],
        [2, 1],
        [3, 3],
        [4, 1],
      ]);

      const appearanceScore = getAppearanceScore(3, 3, list2);

      expect(appearanceScore).toStrictEqual(27);

      const appearanceScore2 = getAppearanceScore(3, 2, list2);
      expect(appearanceScore2).toStrictEqual(18);

      const appearanceScore3 = getAppearanceScore(6, 1, list2);
      expect(appearanceScore3).toStrictEqual(0);

    });
  });
});
