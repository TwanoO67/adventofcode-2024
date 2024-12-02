import { splitValues } from '../lib/lib.js';
import { countValues, getDiff } from './lib.js';

export const main = (input: string) => {
  let [list1, list2] = countValues(splitValues(input, '\n'));

  let total = 0;
  do {
    const [newList1, newList2, diff] = getDiff(list1, list2);
    list1 = newList1;
    list2 = newList2;

    //valeure absolue
    total += diff;

  } while (list1.size > 0 || list2.size > 0);

  return total;
};
