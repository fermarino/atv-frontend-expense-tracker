import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const ExpenseItem = ({ expense, setEditExpense }) => {
  const { dispatch } = useContext(ExpenseContext);

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit" onClick={() => setEditExpense(expense)}>
            <Edit />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => dispatch({ type: 'DELETE_EXPENSE', payload: expense.id })}>
            <Delete />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={expense.title}
        secondary={`$${expense.amount}`}
      />
    </ListItem>
  );
};

export default ExpenseItem;
