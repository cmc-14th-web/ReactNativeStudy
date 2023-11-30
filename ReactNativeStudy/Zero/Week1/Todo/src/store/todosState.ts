import {atom, useRecoilState} from 'recoil';
import {TTodo} from '../components/TodoList';

const taskState = atom({
  key: 'taskState',
  default: [] as TTodo[],
});

export function useTodos() {
  const [todos, setTodos] = useRecoilState(taskState);
  return {
    todos,
    addTodos(task: string) {
      setTodos([
        ...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
          task,
          isDone: false,
        },
      ]);
    },
    removeTask(id: number) {
      setTodos(todos.filter(task => task.id !== id));
    },
    toggleTask(id: number) {
      setTodos(
        todos.map(task =>
          task.id === id ? {...task, isDone: !task.isDone} : task,
        ),
      );
    },
  };
}
