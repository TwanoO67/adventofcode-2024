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

    //sorted
    const sorted1 = new Map([...list1].sort((a,b)=>a[0]-b[0]));
    const sorted2 = new Map([...list2].sort((a,b)=>a[0]-b[0]));

    return [sorted1, sorted2];
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

export const getDiff = (list1: Map<number, number>, list2: Map<number, number>): [Map<number, number>, Map<number, number>, number] => {
    const [newList1, val1] = getFirstValue(list1);
    const [newList2, val2] = getFirstValue(list2);
    
    const diff = Math.abs(val1 - val2);

    return [newList1, newList2, diff];
}

export const getAppearanceScore = (key: number, countInList1: number, list2: Map<number, number>, ): number => {
    const countInList2 = list2.get(key);
    if(countInList2 !== undefined) {
        return countInList1 * countInList2 * key;
    }
    return 0;
}
