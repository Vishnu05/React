import React from 'react';

interface TodoListProps {
    todo: Todo
}

// <> It is a generic 
export const TodoList: React.FC<TodoListProps> = ({ todo }) => {

    return <li>
        <label >
            <input type="checkbox" checked={todo.complete} />
            {todo.text}
        </label>
    </li>

}