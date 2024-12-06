import { splitValues } from "../lib/lib";
import { findMiddleNumber, orderIsCorrect } from "./lib";

export const main = async (input: string) => {
  const rules = (input.match(/(\d{1,3})\|(\d{1,3})/gi))?.map(order => order.split('|').map(Number));
  const orders = splitValues(input).filter(line => line.indexOf(',') !== -1).map(order => order.split(',').map(Number));
  return orders.filter(order => orderIsCorrect(order, rules))?.map(order => findMiddleNumber(order)).reduce((sum, current) => sum + current, 0);
};
