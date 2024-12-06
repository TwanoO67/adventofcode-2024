export const getLineOfAgent = (lines: string[]): number => {
    for(var i = 0; i < lines.length; i++) {
        if(lines[i].indexOf('^') !== -1 || lines[i].indexOf('<') !== -1 || lines[i].indexOf('>') !== -1 || lines[i].indexOf('v') !== -1) {
            return i;
        }
    }
    console.log('agent not found');
    throw new Error('he got out!');
}

export const nextPosition = ([upper,current,lower]: [string, string, string]): [string, string, string] => {
    const agentType = current.match(/[><^v]/gi)?.[0] ?? 'a';
    const agentPosition = current.indexOf(agentType);
    switch(agentType) {
        case '>':
            if(current[agentPosition + 1] === '#') {
                //agent face wall, so he should turn right
                return [
                    upper,
                    current.replace(agentType, 'v'),
                    lower
                ];
            }
            else {
                //agent is not facing wall, so he should move forward
                const nextCurrent = [ ...current ];
                nextCurrent[agentPosition] = 'X';
                if(agentPosition + 1 < current.length) {
                    nextCurrent[agentPosition + 1] = agentType;
                }
                
                return [
                    upper,
                    nextCurrent.join(''),
                    lower
                ];
            }
        case '<':
            if(current[agentPosition - 1] === '#') {
                //agent face wall, so he should turn right
                return [
                    upper,
                    current.replace(agentType, '^'),
                    lower
                ];
            }
            else {
                //agent is not facing wall, so he should move forward
                const nextCurrent = [ ...current ];
                nextCurrent[agentPosition] = 'X';
                if(agentPosition - 1 >= 0) {
                    nextCurrent[agentPosition - 1] = agentType;
                }
                
                return [
                    upper,
                    nextCurrent.join(''),
                    lower
                ];
            }
        case '^':
            if(upper && upper[agentPosition] === '#') {
                //agent face wall, so he should turn right
                return [
                    upper,
                    current.replace(agentType, '>'),
                    lower
                ];
            }
            else {
                //agent is not facing wall, so he should move forward
                const nextCurrent = [ ...current ];
                nextCurrent[agentPosition] = 'X';
                let nextUpper: string[] = [];

                if(upper) {
                    nextUpper = [...upper]
                    nextUpper[agentPosition] = agentType;
                }
                
                return [
                    nextUpper.join(''),
                    nextCurrent.join(''),
                    lower
                ];
            }
        case 'v':
            if(lower && lower[agentPosition] === '#') {
                //agent face wall, so he should turn right
                return [
                    upper,
                    current.replace(agentType, '<'),
                    lower
                ];
            }
            else {
                //agent is not facing wall, so he should move forward
                const nextCurrent = [ ...current ];
                nextCurrent[agentPosition] = 'X';
                let nextLower = [];

                if(lower) {
                    nextLower = [...lower];
                    nextLower[agentPosition] = agentType;
                }
                
                return [
                    upper,
                    nextCurrent.join(''),
                    nextLower.join('')
                ];
            }
        default:
            console.log('erreur cas non géré');
            return [
                upper,
                current,
                lower
            ];
    }
}