const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //Junta state array com novo elemento
      //sem alterar o original state
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => action.id !== id);

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          //Ao encontrarmos a expense a editar
          //damos spread na expense (abrir o objecto)
          //damos spread no parametro com as cenas novas
          //e alteramos os valores a editar
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
