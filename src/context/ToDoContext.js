import { createContext, useEffect, useReducer, useState } from 'react';
import { ulid } from 'ulid';

export const ToDoContext = createContext({
  getToDos: () => {},
  getActiveFilter: () => {},
  getActiveToDosCount: () => {},
  setFilterAll: () => {},
  setFilterActive: () => {},
  setFilterCompleted: () => {},
  addToDo: (todo) => {},
  deleteToDo: (id) => {},
  completeToDo: (id) => {},
  clearCompletedToDos: () => {},
});

const defaultToDosState = [
  { id: ulid(), text: 'Sample TODO', isComplete: true },
];

const toDosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: ulid(), text: action.value, isComplete: false }];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.value);
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.value) {
          todo.isComplete = true;
        }
        return todo;
      });
    case 'CLEAR_COMPLETED':
      return state.filter((todo) => todo.isComplete !== true);
    default:
      throw new Error('Should not reach here');
  }
};

export function ToDoProvider({ children }) {
  const [toDosState, dispatch] = useReducer(toDosReducer, defaultToDosState);
  const [filter, setFilter] = useState('ALL');

  useEffect(() => {
    // localStorage.setItem('todos', toDosState.stringyfy());
  }, [toDosState]);

  const getToDos = () => {
    switch (filter) {
      case 'ACTIVE':
        return toDosState.filter((todo) => !todo.isComplete);
      case 'COMPLETED':
        return toDosState.filter((todo) => todo.isComplete);
      default:
        return toDosState;
    }
  };

  const setFilterAll = () => {
    setFilter('ALL');
  };

  const setFilterActive = () => {
    setFilter('ACTIVE');
  };

  const setFilterCompleted = () => {
    setFilter('COMPLETED');
  };

  const getActiveFilter = () => {
    return filter;
  };

  const getActiveToDosCount = () => {
    return toDosState.filter((todo) => todo.isComplete !== true).length || 0;
  };

  const addToDo = (todo) => {
    dispatch({ type: 'ADD', value: todo });
  };

  const deleteToDo = (id) => {
    dispatch({ type: 'DELETE', value: id });
  };

  const completeToDo = (id) => {
    dispatch({ type: 'COMPLETE', value: id });
  };

  const clearCompletedToDos = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const todoContext = {
    getToDos,
    getActiveFilter,
    getActiveToDosCount,
    setFilterAll,
    setFilterActive,
    setFilterCompleted,
    addToDo,
    deleteToDo,
    completeToDo,
    clearCompletedToDos,
  };

  return (
    <ToDoContext.Provider value={todoContext}>{children}</ToDoContext.Provider>
  );
}
