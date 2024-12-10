import { J } from "vitest/dist/chunks/reporters.D7Jzd9GS";

export const convertToData = (input: string): string[] => {

    let output: string[] = [];
    let sector = 0;
    for (let i = 0; i < input.length; i++) {
        for(let j = 0; j < Number(input[i]); j++){
            if (i % 2 !== 0) {
                output.push('.');
            }
            else{
                output.push(sector.toString());
            }
        }

        if (i % 2 === 0) {
            sector++
        }
    }
    return output;
}

export const fillFreeSpace = (input: string[]): string[] => {
    let reverse = input.filter(x => x !== '.').reverse();
    let spaceTaken = reverse.length;
    let output: string[] = [];
    for (let i = 0; i < input.length; i++) {
        if(i < spaceTaken){
            if (input[i] === ".") {
                let first = reverse.shift();
                output.push(first??'');
            }
            else{
                output.push(input[i]);
            }
        }
        else {
            output.push('.');
        }
    }
    return output;
}


export const convertToDataAllBlocks = (input: string): Array<string[]> => {
    let output: string[][] = [];
    let sector = 0;
    for (let i = 0; i < input.length; i++) {
        let bloc = [];
        for(let j = 0; j < Number(input[i]); j++){
            if (i % 2 !== 0) {
                bloc.push('.');
            }
            else{
                bloc.push(String(sector));
            }
        }
        if(bloc.length > 0)
            output.push(bloc);

        if (i % 2 === 0) {
            sector++
        }
    }
    return output;
}

export const fillFreeSpaceWholeBlock = (input: string[][]): string[][] => {
    let output: string[][] = [...input];

    let initialLength = output.length;
    for (let i = initialLength - 1; i >= 0; i--) {
        let currentBlock = output[i];
        if(currentBlock.indexOf('.') !== -1){
            continue;
        }

        for (let j = 0; j < i; j++) {
            let currentPlace = output[j];
            if(currentPlace.indexOf('.') !== -1 && currentPlace.length >= currentBlock.length){
                output[j] = currentBlock;
                output[i] = currentBlock.map(x => '.');
                //if there space left, we should add a new space block
                if(currentPlace.length > currentBlock.length){
                    let newValue = [];
                    let newSpaceLength = currentPlace.length - currentBlock.length;
                    for(let k = 0; k < newSpaceLength; k++){
                        newValue.push('.');
                    }
                    let before = output.slice(0, j+1)
                    let after = output.slice(j + 1);
                    output = before.concat([newValue], after);
                }
                break;
            }
        }
    }
    return output;
}

export const calcChecksum = (input: string[]): number => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].indexOf('.') === -1) {
            total += Number(input[i]) * i;
        }
    }
    return total
}

export const calcChecksumOfArray = (input: string[][]): number => {
    let total = 0;
    let positionOfBlock = 0;
    for (let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++){
            if (input[i][j] !== '.') {
                total += Number(input[i][j]) * positionOfBlock;
            }
            positionOfBlock++
        }
    }
    return total
}