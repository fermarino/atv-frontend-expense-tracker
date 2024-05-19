import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { List, Container, Typography } from '@mui/material';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ setEditExpense }) => {
  const { state } = useContext(ExpenseContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Expense List
      </Typography>
      <List>
        {state.expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} setEditExpense={setEditExpense} />
        ))}
      </List>
    </Container>
  );
};

export default ExpenseList;
