
import React, { useState } from 'react';

const CountState = () => {

    // this is best practise when dealing with larger components, 
    // you don't want to re-render the intial state again and again
    const [count1, setCount1] = useState(() => {
        console.log('Initial state is called')
        return 0
    });

    const initialStateValue = () => {
        console.log('Initial state value')
        return 0;
    }

    // If the initial state value is not going to change. Rendering each time it will cost a lot
    // while there is no need to rerender the dom again and again. Above approach is best as of now.
    // Each time the js call from the div element. initialStateValue() function is called. That is a costly operations 
    const [count, setCount] = useState(initialStateValue());


    console.log('Rendering...')

    // this doesn't work as intented
    const decrementCount = () => {
        console.log('decrement')
        // the same value of count is getting overrided when the function calls second time
        setCount(count - 1)
        setCount(count - 1)

    }

    const incrementCount = () => {
        console.log('increment')
        setCount(count + 1)
    }


    // this works just fine
    const decrementCountEff = () => {
        console.log('decrement eff')
        // taking the previous count and doing the operation so the value are updated
        setCount1(prevCount => prevCount - 1);
        setCount1(prevCount => prevCount - 1);
    }

    const incrementCountEff = () => {
        console.log('increment eff')
        setCount1(prevCount => prevCount + 1);
        setCount1(prevCount => prevCount + 1);

    }


    return (
        <div>
            <button onClick={decrementCount} className="btn btn-primary">-</button>
            <button className="btn btn-success">{count}</button>
            <button onClick={incrementCount} className="btn btn-primary">+</button>

            <br /><br />

            <div>
                <p>Effient way of doing</p>
                <button onClick={decrementCountEff} className="btn btn-primary">-</button>
                <button className="btn btn-success">{count1}</button>
                <button onClick={incrementCountEff} className="btn btn-primary">+</button>
            </div>
        </div>
    )

}

export default CountState;

