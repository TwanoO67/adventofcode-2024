import { splitValues } from '../lib/lib.js';
import { countValues, getFirstValue } from './lib.js';

export const main = (input: string) => {
  const maps = countValues(splitValues(input, '\n'));

  let total = 0;
  let diff = 0;
  do {
    const [newList1, val1] = getFirstValue(maps[0]);
    const [newList2, val2] = getFirstValue(maps[1]);

    maps[0] = newList1;
    maps[1] = newList2;

    diff = Math.abs(val1 - val2);
    console.log(diff);
    
    //valeure absolue
    total += diff;

  } while (diff > 0);

  return total;
};
