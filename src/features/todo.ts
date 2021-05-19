import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../domain/models/todo';

export type TodoState = { todos: Todo[] };
const initialState: TodoState = { todos: [] };

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodo: (state, action: PayloadAction<{ todos: Todo[] }>) => ({
      ...state,
      todos: action.payload.todos,
    }),
  },
});
