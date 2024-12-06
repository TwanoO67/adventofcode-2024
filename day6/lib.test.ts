import { describe, expect, it } from "vitest";
import { countPossiblePositionsForBlock, getFixedGrid, getLineOfAgent } from "./lib";

describe("Given day6", () => {
  describe("When part1", () => {
    it("Then", () => {
      const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;


      let lines = input.split('\n');
      const currentLineIndex: number = getLineOfAgent(lines);

      expect(currentLineIndex).toBe(6);

      lines = getFixedGrid(lines);

      let total = 0;
      for(var i = 0; i < lines.length; i++) {
        const line = lines[i];
        total += (line.match(/X/g) || []).length
      }

      expect(total).toBe(41);

    });
  });
});


describe("Given day6", () => {
  describe("When part2", () => {
    it("Then", () => {
      const input = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;


      let initialLines = input.split('\n');
      
      const total = countPossiblePositionsForBlock(initialLines);

      expect(total).toBe(6);

    });
  });
});
