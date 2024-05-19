import React, { useState } from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [editExpense, setEditExpense] = useState(null);

  return (
    <ExpenseProvider>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Expense Tracker
        </Typography>
        <ExpenseForm editExpense={editExpense} setEditExpense={setEditExpense} />
        <ExpenseList setEditExpense={setEditExpense} />
      </Container>
    </ExpenseProvider>
  );
};

export default App;
