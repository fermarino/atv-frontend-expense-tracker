import React, { createContext, useReducer } from 'react';

const ExpenseContext = createContext();

const initialState = {
  expenses: []
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'DELETE_EXPENSE':
      return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.payload) };
    case 'EDIT_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense)
      };
    default:
      return state;
  }
};

const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseContext, ExpenseProvider };
