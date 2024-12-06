export const orderIsCorrect = (order: number[], rules: Array<[number, number]>) => {
    return breakRule(order, rules) === undefined;
}

export const breakRule = (order: number[], rules: Array<[number, number]>) => {
    //for each number in order
    for(var i = 0; i < order.length; i++) {
        const num = order[i];
        //for each rule
        for(var j = 0; j < rules.length; j++) {
            const [a, b] = rules[j];
            //if the number is impacted by the rule
            if(a === num && order.indexOf(b) !== -1 && order.indexOf(num) > order.indexOf(b)) {
                console.log(num, "break rule", a, b, "in", order);
                return rules[j];
            }

            if(b === num && order.indexOf(a) !== -1 &&order.indexOf(num) < order.indexOf(a)) {
                return rules[j];
            }
        }
    }

    return undefined;
}

export const switchPosition = (order: number[], [a, b]: [number, number]): number[] => {
    const oldIndexA = order.indexOf(a);
    const oldIndexB = order.indexOf(b);
    const newOrder = [...order];
    newOrder[oldIndexA] = b;
    newOrder[oldIndexB] = a;
    return newOrder;
}
    

export const correct = (order: number[], rules: Array<[number, number]>) => {
    let correctOrder = [...order];
    let brokenRule = undefined;
    do {
        brokenRule = breakRule(correctOrder, rules);
        if(brokenRule !== undefined){
            correctOrder = switchPosition(correctOrder, brokenRule);
        }
    }
    while(brokenRule !== undefined);

    return correctOrder;
}

export const findMiddleNumber = (order: number[]) => {
    const middle = Math.floor(order.length / 2);
    return order[middle];
}