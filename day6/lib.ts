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


export const getFixedGrid = (lines: string[]) => {
  let iteration = 0;
  let maxIteration = 131 * 131; //number of cells max of the grid

  do {
    try {
      const currentLineIndex = getLineOfAgent(lines);
      const nextLines = nextPosition([lines[currentLineIndex-1], lines[currentLineIndex], lines[currentLineIndex+1]]);
      lines[currentLineIndex-1] = nextLines[0];
      lines[currentLineIndex] = nextLines[1];
      lines[currentLineIndex+1] = nextLines[2];
      iteration++
    }
    catch {
      console.log('he got out');
      iteration = maxIteration;
    }
    
  }
  while(iteration < maxIteration)

return lines;
}


export const countPossiblePositionsForBlock = (initialLines: string[]) => {
    let initialLineOfAgent = 0;
    let initialIndexOfAgent = 0;
    for(var i = 0; i < initialLines.length; i++) {
    const current = initialLines[i];
    const agentType = current.match(/[><^v]/gi)?.[0] ?? 'a';
    if(agentType !== 'a'){
        initialLineOfAgent = i;
        initialIndexOfAgent = current.indexOf(agentType);
        break;
    }
    }

    let total = 0;
    for(var i = 0; i < initialLines.length; i++) {
        const line = initialLines[i];
        for(var j=0; j < line.length; j++){
            //exclude the intial position of the agent
            if(i===initialLineOfAgent && j === initialIndexOfAgent) {
            continue;
            }

            const newTest = [ ...initialLines];
            let newLine = [ ...line ];
            newLine[j] = '#';
            newTest[i] = newLine.join('');

            //resolve the agent movements
            const fixedLines = getFixedGrid(newTest);
            try {
                //is the agent still in the grid?
                getLineOfAgent(fixedLines);
                total++;
                console.log('found a position');
            }
            catch {
                //if not, we don't count anything
            }

        }
    }
    return total;

}
    