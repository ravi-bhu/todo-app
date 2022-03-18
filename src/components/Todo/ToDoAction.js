import { useContext } from 'react';
import { ToDoContext } from '../../context/ToDoContext';
import styles from './ToDoAction.module.css';

export default function ToDoAction() {
  const toDoContext = useContext(ToDoContext);
  const activeFilter = toDoContext.getActiveFilter();
  return (
    <div className={styles['todo-action']}>
      <p>{toDoContext.getActiveToDosCount()} items left</p>
      <div className={styles.filter}>
        <button
          className={activeFilter === 'ALL' ? styles.active : null}
          onClick={toDoContext.setFilterAll}>
          All
        </button>
        <button
          className={activeFilter === 'ACTIVE' ? styles.active : null}
          onClick={toDoContext.setFilterActive}>
          Active
        </button>
        <button
          className={activeFilter === 'COMPLETED' ? styles.active : null}
          onClick={toDoContext.setFilterCompleted}>
          Completed
        </button>
      </div>
      <button onClick={toDoContext.clearCompletedToDos}>Clear Completed</button>
    </div>
  );
}
