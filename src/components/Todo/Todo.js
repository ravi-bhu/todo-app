import { ToDoProvider } from '../../context/ToDoContext';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function Todo() {
  return (
    <ToDoProvider>
      <ToDoForm />
      <ToDoList />
    </ToDoProvider>
  );
}
