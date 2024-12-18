import { describe, expect, it } from "vitest";
import { splitValues } from "../lib/lib";
import { correct, findMiddleNumber, orderIsCorrect, switchPosition } from "./lib";

describe("Given", () => {
  describe("When", () => {
    it("Then", () => {

      const input = `
      47|53
      97|13
      97|61
      97|47
      75|29
      61|13
      75|53
      29|13
      97|29
      53|29
      61|53
      97|53
      61|29
      47|13
      75|47
      97|75
      47|61
      75|61
      47|29
      75|13
      53|13
      
      75,47,61,53,29
      97,61,53,29,13
      75,29,13
      75,97,47,61,53
      61,13,29
      97,13,75,29,47`;

      const rules = (input.match(/(\d{1,3})\|(\d{1,3})/gi))?.map(order => order.split('|').map(Number));
      expect(rules?.length).toBe(21);

      const orders = splitValues(input).filter(line => line.indexOf(',') !== -1).map(order => order.split(',').map(Number));
      expect(orders?.length).toBe(6);

      const correctOrders = orders.filter(order => orderIsCorrect(order, rules));
      expect(correctOrders?.length).toBe(3);

      const middles = correctOrders?.map(order => findMiddleNumber(order));
      expect(middles?.length).toBe(3);
      expect(middles?.[0]).toBe(61);
      expect(middles?.[1]).toBe(53);
      expect(middles?.[2]).toBe(29);

      const result = middles.reduce((sum, current) => sum + current, 0);
      expect(result).toBe(143);
    });
  });
});

describe("Given", () => {
  describe("When", () => {
    it("Then", () => {

      const input = `
      47|53
      97|13
      97|61
      97|47
      75|29
      61|13
      75|53
      29|13
      97|29
      53|29
      61|53
      97|53
      61|29
      47|13
      75|47
      97|75
      47|61
      75|61
      47|29
      75|13
      53|13
      
      75,47,61,53,29
      97,61,53,29,13
      75,29,13
      75,97,47,61,53
      61,13,29
      97,13,75,29,47`;

      const rules = (input.match(/(\d{1,3})\|(\d{1,3})/gi))?.map(order => order.split('|').map(Number));
      expect(rules?.length).toBe(21);

      const orders = splitValues(input).filter(line => line.indexOf(',') !== -1).map(order => order.split(',').map(Number));
      expect(orders?.length).toBe(6);

      const incorrectOrders = orders.filter(order => !orderIsCorrect(order, rules));
      expect(incorrectOrders?.length).toBe(3);

      const tab1 = [ 5 , 8 , 4 , 7 , 9 , 6 , 1 , 3 , 2 , 10];
      const tabResult = switchPosition(tab1, [9, 10]);
      expect(tabResult).toEqual([5, 8, 4, 7, 10, 6, 1, 3, 2, 9]);
    
      const correctOrders = incorrectOrders.map(order => correct(order, rules));

      const middles = correctOrders?.map(order => findMiddleNumber(order));
      expect(middles?.length).toBe(3);
      expect(middles?.[0]).toBe(47);
      expect(middles?.[1]).toBe(29);
      expect(middles?.[2]).toBe(47);

      const result = middles.reduce((sum, current) => sum + current, 0);
      expect(result).toBe(123);
    });
  });
});

