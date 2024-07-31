// src/components/TodoList.tsx
import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <div className='tasks'>
        <div className='pending-tasks'>
            <h1>Pending Tasks</h1>
            {todos.filter((todo) => 
                todo.completed === false
            ).map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
        </div>
        <div className='completed-tasks'>
            <h1>Completed Tasks</h1>
            {todos.filter((todo) => 
                todo.completed === true
            ).map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
        </div>
      
    </div>
  );
};

export default TodoList;
