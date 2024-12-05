export const main = async (input: string) => {

  var matches = input.match(/mul\(\d{1,3}\,\d{1,3}\)|do\(\)|don't\(\)/gi);

  let total = 0
  let doMode = true;

  if((matches?.length??0) > 1)
  matches?.forEach(match => {
    if(match === 'do()') {
      doMode = true;
    }
    else if(match === 'don\'t()') {
      doMode = false;
    }
    else {
      const [, a, b] = match.match(/mul\((\d{1,3}),(\d{1,3})\)/) ?? [0,0,0];
      if(doMode) {
        total += a * b;
      }
    }
  });

  return total;
};
