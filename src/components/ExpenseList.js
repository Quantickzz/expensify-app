import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

//connect liga um react component a uma redux store
//passamos o component a ser connected (ExpenseList)
//à funcao resultante connect()(ExpenseList) e no primeiro
//parâmetro, definimos uma função (mapStateToProps) que indica que partes da info
//queremos usar da state da store.
//Sempre que mudamos a store, este component é REACT(ive)
//e atualiza accordingly
export default connect(mapStateToProps)(ExpenseList);
