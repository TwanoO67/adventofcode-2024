export const main = async (input: string) => {

  var matches = input.match(/mul\(\d{1,3}\,\d{1,3}\)/gi);
  
  let total = 0

  matches?.forEach(match => {
    const [, a, b] = match.match(/mul\((\d{1,3}),(\d{1,3})\)/);
    total += a * b;
  });

  return total;
};
