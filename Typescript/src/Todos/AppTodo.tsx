
import React from 'react'
import FormValidation from './FormValidation';

import { TodoList } from './TodoList';


const todos: Array<Todo> = [
    { text: "Eat well", complete: false },
    { text: "sleep well", complete: false }
]

export const AppTodo: React.FC = () => {

    return (

        <div>

            {todos.map((k, i) => (
                <div key={k.text}>
                    <TodoList todo={todos[i]} />
                </div>
            ))}

           <FormValidation />

        </div>
    )

}

