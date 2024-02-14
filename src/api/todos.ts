import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`);
};

export const postTodo = (userId: number, title: string) => {
  const data: Omit<Todo, 'id'> = {
    userId,
    title,
    completed: false,
  };

  return client.post<Todo>('/todos', data);
};

export const patchTodo = (
  id: number,
  title: string,
  completed: boolean,
) => {
  return client.patch<Todo>(`/todos/${id}`, { title, completed });
};
