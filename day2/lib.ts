import { splitValues } from "../lib/lib";

export function isSafe(report: string): boolean {
    const levels = splitValues(report, ' ').map(Number);

    try {
        levelsAreSafe(levels)
    }
    catch(e) {
        return false;
    }

    return true;
}

export function levelsAreSafe(levels: number[]) {
    if(levels[0] < levels[1]){
        isIncreasing(levels);
    }
    else if(levels[0] >= levels[1]){
        isDecreasing(levels);
    }

    isStepped(levels);
}

export function isSafeWithTolerance(report: string): boolean {
    const levels = splitValues(report, ' ').map(Number);

    try {
        levelsAreSafe(levels)
    }
    catch(e) {
        const withoutOne = [...levels];
        withoutOne.splice(e as number, 1);
        try {
            //try without this level
            levelsAreSafe(withoutOne);
        } catch {
            try {
                //try without next level
                const withoutNext = [...levels]
                withoutNext.splice((e as number) + 1, 1);
                levelsAreSafe(withoutNext);
            } catch {
                //not safe
                return false;
            }
        }
    }

    return true;
}

function isIncreasing(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] > levels[i + 1]) {
            throw i;
        }
    }
}

function isDecreasing(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        if (levels[i] < levels[i + 1]) {
            throw i;
        }
    }
}

function isStepped(levels: number[]) {
    for (let i = 0; i < levels.length - 1; i++) {
        const diff = Math.abs(levels[i] - levels[i + 1]);
        if (diff === 0 || diff > 3) {
            throw i;
        }
    }
}