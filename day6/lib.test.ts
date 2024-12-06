import { describe, expect, it } from "vitest";
import { getLineOfAgent, nextPosition, replaceAgentInCurrentLine } from "./lib";

describe("Given", () => {
  describe("When", () => {
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

      let iteration = 0;
      let maxIteration = 100;
      do {
        try {
          const currentLineIndex = getLineOfAgent(lines);
          const nextLines = nextPosition([lines[currentLineIndex-1], lines[currentLineIndex], lines[currentLineIndex+1]]);
          lines[currentLineIndex-1] = nextLines[0];
          lines[currentLineIndex] = nextLines[1];
          lines[currentLineIndex+1] = nextLines[2];
          iteration++
        }
        catch {
          //he got out, so stop
          iteration = maxIteration;
        }
        
      }
      while(iteration < maxIteration)

      let total = 0;
      for(var i = 0; i < lines.length; i++) {
        const line = lines[i];
        total += (line.match(/X/g) || []).length
      }

      expect(total).toBe(41);

    });
  });
});
