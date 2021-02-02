
import React from 'react'
import { TodoList } from './TodoList';


const todos: Array<Todo> = [
    { text: "Eat well", complete: false },
    { text: "sleep well", complete: false }
]

export const AppTodo: React.FC = () => {

    return (

        <div>
            <TodoList todo={todos[0]} />
        </div>
    )

}

