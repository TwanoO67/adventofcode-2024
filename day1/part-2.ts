import { splitValues } from '../lib/lib.js';
import { countValues, getAppearanceScore } from './lib.js';

export const main = async (input: string) => {
  let [list1, list2] = countValues(splitValues(input, '\n'));

  let total = 0;
  list1.forEach((value, key) => {
    total += getAppearanceScore(key, value, list2);
  });
  
  return total;
};
