import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const dummyObject = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  };
  const state = filtersReducer(dummyObject, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should setTextFilter", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "hello",
  });
  expect(state.text).toBe("hello");
});

test("should set startdate", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment().startOf("day"),
  });
  expect(state.startDate).toEqual(moment().startOf("day"));
});

test("should set enddate", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment().endOf("year"),
  });
  expect(state.endDate).toEqual(moment().endOf("year"));
});
