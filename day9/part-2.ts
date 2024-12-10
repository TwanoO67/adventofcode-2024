import { calcChecksumOfArray, convertToDataAllBlocks, fillFreeSpaceWholeBlock } from "./lib";

export const main = async (input: string) => {
      const dataRepresentation = convertToDataAllBlocks(input);
      const filled = fillFreeSpaceWholeBlock(dataRepresentation);
      const checkSum = calcChecksumOfArray(filled);
      return checkSum;
};
