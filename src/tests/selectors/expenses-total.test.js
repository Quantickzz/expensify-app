import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses", () => {
  const noExpenses = [];
  const result = selectExpensesTotal(noExpenses);
  expect(result).toBe(0);
});

test("should return correctly if 1 expense", () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test("should correctly add multiple expenses", () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});
