import { splitValues } from '../lib/lib';
import { isSafeWithTolerance } from './lib';

export const main = async (input: string) => {
  const reports = splitValues(input, '\n');

  const count = reports.reduce((acc, report) => {
    if(isSafeWithTolerance(report)) {
      acc++;
    }
    return acc;
  }, 0);

  return count;
};