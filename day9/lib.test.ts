import { describe, expect, it } from "vitest";
import { calcChecksum, calcChecksumOfArray, convertToData, convertToDataAllBlocks, fillFreeSpace, fillFreeSpaceWholeBlock } from "./lib";

describe("Given part 1", () => {
  describe("When", () => {
    it("Then", () => {
      const exampleInput = "2333133121414131402";

      const dataRepresentation = convertToData(exampleInput);
      expect(dataRepresentation.join('')).toEqual("00...111...2...333.44.5555.6666.777.888899");

      const filled = fillFreeSpace(dataRepresentation);
      expect(filled.join('')).toEqual("0099811188827773336446555566..............");

      const checkSum = calcChecksum(filled);
      expect(checkSum).toBe(1928);
    });
  });
});

describe("Given part 2", () => {
  describe("When", () => {
    it("Then", () => {
      const exampleInput = "2333133121414131402";

      const dataRepresentation = convertToDataAllBlocks(exampleInput);
      expect(dataRepresentation.length).toBe(18);
      expect(dataRepresentation.map(x => x.join('')).join('')).toEqual("00...111...2...333.44.5555.6666.777.888899");

      const filled = fillFreeSpaceWholeBlock(dataRepresentation);
      expect(filled.map(x => x.join('')).join('')).toEqual("00992111777.44.333....5555.6666.....8888..");

      const checkSum = calcChecksumOfArray(filled);
      expect(checkSum).toBe(2858);
    });
  });
});
