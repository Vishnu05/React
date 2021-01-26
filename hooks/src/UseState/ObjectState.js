
import React, { useState } from 'react';

const ObjectState = () => {

    // while using objects we have to destructure the values 
    const [state, setState] = useState(() => { return { count: 4, theme: 'blue' } });

    const count = state.count;
    const theme = state.theme;


    console.log('Count value', count, ' value : ', theme)

    function increment() {
       setState( val => {
           return {count: val.count + 1}
       })
    }

    function decrement() {
        // setCount()
    }

    return (

        <div>

            <button className='btn btn-primary ' onClick={decrement}>-</button>
            <button className='btn btn-success'>{count}</button>
            <span>{theme}</span>
            <button className='btn btn-primary' onClick={increment}>+</button>
        </div>
    )

}

export default ObjectState;