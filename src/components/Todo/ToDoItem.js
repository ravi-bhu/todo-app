import { useContext } from 'react';
import iconCheck from '../../assets/icons/icon-cross.svg';
import { ToDoContext } from '../../context/ToDoContext';
import styles from './ToDoItem.module.css';

function ToDoItem({ todo }) {
  const toDoContext = useContext(ToDoContext);
  return (
    <>
      <li className={styles['todo-item']}>
        <input
          type="radio"
          value={todo.id}
          checked={todo.isComplete}
          onChange={() => toDoContext.completeToDo(todo.id)}
        />
        <p className={todo.isComplete ? styles.complete : null}>{todo.text}</p>
        <span className="spacer"></span>
        <button type="button" onClick={() => toDoContext.deleteToDo(todo.id)}>
          <img src={iconCheck} alt="delete" />
        </button>
      </li>
      <hr />
    </>
  );
}

export default ToDoItem;
