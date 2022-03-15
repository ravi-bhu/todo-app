import { useContext, useState } from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import styles from './ToDoForm.module.css';

const INITIAL_TODO_STATE = '';

export default function ToDoForm() {
  const [todo, setTodo] = useState(INITIAL_TODO_STATE);
  const toDoContext = useContext(ToDoContext);

  const addToDo = (e) => {
    e.preventDefault();
    if (!todo) return;
    toDoContext.addToDo(todo);
    setTodo(INITIAL_TODO_STATE);
  };

  return (
    <form className={`card ${styles['todo-form']}`} onSubmit={addToDo}>
      <input type="radio" disabled />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="submit" hidden />
    </form>
  );
}
