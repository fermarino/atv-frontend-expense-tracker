import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { TextField, Button, Container, Box } from '@mui/material';

const ExpenseForm = ({ editExpense, setEditExpense }) => {
  const { dispatch } = useContext(ExpenseContext);
  const [title, setTitle] = useState(editExpense ? editExpense.title : '');
  const [amount, setAmount] = useState(editExpense ? editExpense.amount : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editExpense) {
      dispatch({ type: 'EDIT_EXPENSE', payload: { ...editExpense, title, amount } });
      setEditExpense(null);
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: { id: Date.now(), title, amount }
      });
    }
    setTitle('');
    setAmount('');
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="amount"
          label="Amount"
          type="number"
          id="amount"
          autoComplete="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {editExpense ? 'Edit Expense' : 'Add Expense'}
        </Button>
      </Box>
    </Container>
  );
};

export default ExpenseForm;
