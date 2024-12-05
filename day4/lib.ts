export const countXMAS = (input: string) => {


    const lines = input.split('\n');
    let count = 0;

    const testCharAt = (i: number, j: number, expected: string) => {
        return lines?.[i]?.[j] === expected;
    }

    const detectXMAS = (i: number, j: number) => {
        let count = 0;
        //check if the word is horizontal
        if(testCharAt(i,j+1,'M') && testCharAt(i,j+2,'A') && testCharAt(i,j+3,'S')) {
            count++;
        }
        if(testCharAt(i,j-1,'M') && testCharAt(i,j-2,'A') && testCharAt(i,j-3,'S')) {
            count++;
        }

        //check if the word is vertical
        if(testCharAt(i+1,j,'M') && testCharAt(i+2,j,'A') && testCharAt(i+3,j,'S')) {
            count++;
        }
        if(testCharAt(i-1,j,'M') && testCharAt(i-2,j,'A') && testCharAt(i-3,j,'S')) {
            count++;
        }

        //check for diagonals
        if(testCharAt(i+1,j+1,'M') && testCharAt(i+2,j+2,'A') && testCharAt(i+3,j+3,'S')) {
            count++;
        }
        if(testCharAt(i-1,j-1,'M') && testCharAt(i-2,j-2,'A') && testCharAt(i-3,j-3,'S')) {
            count++;
        }
        if(testCharAt(i+1,j-1,'M') && testCharAt(i+2,j-2,'A') && testCharAt(i+3,j-3,'S')) {
            count++;
        }
        if(testCharAt(i-1,j+1,'M') && testCharAt(i-2,j+2,'A') && testCharAt(i-3,j+3,'S')) {
            count++;
        }
        return count;
    }

    for(var i = 0; i < lines.length; i++) {
        const line = lines[i];
        for(var j = 0; j < line.length; j++) {
            if(line[j] === 'X'){
                count += detectXMAS(i,j);
            }
        }
    }

    return count;
}

export const countCrossMAS = (input: string) => {


    const lines = input.split('\n');
    let count = 0;

    const testCharAt = (i: number, j: number, expected: string) => {
        return lines?.[i]?.[j] === expected;
    }

    const detectXMAS = (i: number, j: number) => {
        let count = 0;
        //check if the word is a cross of MAS
        if(
            testCharAt(i-1,j-1,'M') && testCharAt(i+1,j+1,'S') ||
            testCharAt(i-1,j-1,'S') && testCharAt(i+1,j+1,'M')
        ) {
            if(
                testCharAt(i-1,j+1,'M') && testCharAt(i+1,j-1,'S') ||
                testCharAt(i-1,j+1,'S') && testCharAt(i+1,j-1,'M')
            ) {
                count++;
            }
        }
        return count;
    }

    for(var i = 0; i < lines.length; i++) {
        const line = lines[i];
        for(var j = 0; j < line.length; j++) {
            if(line[j] === 'A'){
                count += detectXMAS(i,j);
            }
        }
    }

    return count;
}

