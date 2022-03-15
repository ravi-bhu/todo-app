import { useContext } from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import ToDoAction from './ToDoAction';
import ToDoItem from './ToDoItem';
import styles from './ToDoList.module.css';

function ToDoList() {
  const toDoContext = useContext(ToDoContext);

  return (
    <ul className={`card ${styles['todo-list']}`}>
      {toDoContext.getToDos().map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
      <ToDoAction />
    </ul>
  );
}

export default ToDoList;
