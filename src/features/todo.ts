import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../domain/models/task';

export type TaskState = { tasks: Task[] };
const initialState: TaskState = { tasks: [] };

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<{ todos: Task[] }>) => ({
      ...state,
      todos: action.payload.todos,
      isLoading: false,
      error: null,
    }),
  },
});
