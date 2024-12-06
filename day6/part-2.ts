import { countPossiblePositionsForBlock } from "./lib";

export const main = async (input: string) => {
  let initialLines = input.split('\n');
      
  return countPossiblePositionsForBlock(initialLines);
};
