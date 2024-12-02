import { splitValues, valueToInt } from "../lib/lib";


export const countValues = (lines: string[]): [Map<number,number>, Map<number,number>] => {;
    const list1 = new Map<number, number>();
    const list2 = new Map<number, number>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [first, second] = splitValues(line,'   ').map(valueToInt);

    const firstValue = list1.get(first) ?? 0;
    list1.set(first, firstValue + 1);

    const secondValue = list2.get(second) ?? 0;
    list2.set(second, secondValue + 1);
  }


  return [list1, list2];

}

export const getFirstValue = (list: Map<number, number>): [Map<number, number>, number] => {
    const [key, value] = list.entries().next().value ?? [0, 0];

    //decrease entry
    const newValue = value - 1;
    const newList = list.set(key, newValue);
    if (newValue === 0) {
        list.delete(key);
    }

    return [ newList, key ];
};
