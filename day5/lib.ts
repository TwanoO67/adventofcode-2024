export const orderIsCorrect = (order: number[], rules: Array<[number, number]>) => {
    //for each number in order
    for(var i = 0; i < order.length; i++) {
        const num = order[i];
        //for each rule
        for(var j = 0; j < rules.length; j++) {
            const [a, b] = rules[j];
            //if the number is impacted by the rule
            if(a === num && order.indexOf(b) !== -1 && order.indexOf(num) > order.indexOf(b)) {
                console.log(num, "break rule", a, b, "in", order);
                return false;
            }

            if(b === num && order.indexOf(a) !== -1 &&order.indexOf(num) < order.indexOf(a)) {
                return false;
            }
        }
    }

    return true;
}

export const findMiddleNumber = (order: number[]) => {
    const middle = Math.floor(order.length / 2);
    return order[middle];
}