import { calcChecksum, convertToData, fillFreeSpace } from "./lib";

export const main = async (input: string) => {
      const dataRepresentation = convertToData(input);
      const filled = fillFreeSpace(dataRepresentation);
      return calcChecksum(filled);
};
