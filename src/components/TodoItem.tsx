// src/components/TodoItem.tsx
import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div className='todo'>
      <div>
        <span>
            {todo.text}
        </span>
      </div>
      {todo.completed? <></> :<input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
      />

      }
      
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
