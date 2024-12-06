
import { getLineOfAgent, nextPosition } from './lib';

export const main = async (input: string) => {
  let lines = input.split('\n');
  let iteration = 0;
  let maxIteration = 10000;

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

  let total = 0;
  for(var i = 0; i < lines.length; i++) {
    const line = lines[i];
    total += (line.match(/X/g) || []).length
  }

  return total;
};
