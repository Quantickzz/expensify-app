import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expenseToAdd = {
    id: "4",
    description: "Tablet",
    note: "",
    amount: 139,
    createdAt: moment(0),
    endDate: moment(0),
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense: expenseToAdd,
  });
  expect(state).toEqual([...expenses, expenseToAdd]);
});

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      description: "Credit Carderino",
      amount: "139",
    },
  };
  const newExpenses = [...expenses];
  newExpenses[2] = { ...newExpenses[2], ...action.updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(newExpenses);
});

test("should not edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description: "Credit Carderino",
      amount: "139",
    },
  };
  const newExpenses = [...expenses];
  newExpenses[2] = { ...newExpenses[2], ...action.updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
