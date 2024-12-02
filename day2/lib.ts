import { splitValues } from "../lib/lib";

export function isSafe(report: string): boolean {
    const levels = splitValues(report, ' ').map(Number);

    try {
        if(levels[0] < levels[1]){
            isIncreasing(levels);
        }
        else if(levels[0] >= levels[1]){
            isDecreasing(levels);
        }

        isStepped(levels);
    }
    catch(e) {
        return false;
    }

    return true;
}

function isIncreasing(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] > levels[i + 1]) {
            throw i+1;
        }
    }
}

function isDecreasing(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] < levels[i + 1]) {
            throw i+1;
        }
    }
}

function isStepped(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        const diff = Math.abs(levels[i] - levels[i + 1]);
        if (diff === 0 || diff > 3) {
            throw i+1;
        }
    }
}