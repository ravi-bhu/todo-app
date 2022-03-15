import { ToDoContextProvider } from '../../context/ToDoContext';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

export default function Todo() {
  return (
    <ToDoContextProvider>
      <ToDoForm />
      <ToDoList />
    </ToDoContextProvider>
  );
}
