import { splitValues } from '../lib/lib';
import { correct, findMiddleNumber, orderIsCorrect } from './lib';

export const main = async (input: string) => {
  const rules = (input.match(/(\d{1,3})\|(\d{1,3})/gi))?.map(order => order.split('|').map(Number));
      const orders = splitValues(input).filter(line => line.indexOf(',') !== -1).map(order => order.split(',').map(Number));
      const incorrectOrders = orders.filter(order => !orderIsCorrect(order, rules));
      const correctOrders = incorrectOrders.map(order => correct(order, rules));
      const middles = correctOrders?.map(order => findMiddleNumber(order));
      return middles.reduce((sum, current) => sum + current, 0);
};
