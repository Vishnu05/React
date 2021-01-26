
import React, { useState } from 'react';

const ClickCount = () => {

    // initializing the state
    const [count, setCount] = useState(0);

    // first value is for using or consuming the value. Second parameter is to update the value
    // useState('') inital value for the state
    const [input, setInput] = useState('')

    const [renderCount, setRenderCount] = useState(0)

    const renderMethod = () => {
        console.log('hello')
        // setRenderCount(renderCount + 1)
    }
    return (


        <div>
            {/* {() => { setRenderCount(renderCount + 1); console.log('function call') }} */}
            {renderMethod()}
            <div>
                <p>Count : {count}</p>
                <div>
                    <button onClick={() => { setCount(count + 1); console.log('count value', count, 'setcount : ', setCount) }}>Click me</button>
                </div>
            </div>

            <div>
                <label htmlFor="">Input Fileds</label>
                <div>
                    <input type="text" onChange={(event) => { setInput(event.target.value) }} />
                </div>
                <div>
                    <p>
                        Input text will be rendered here : {input}
                    </p>
                </div>

                <div>
                    <p>Page render count : {renderCount}</p>
                </div>
            </div>
        </div>
    )
}

export default ClickCount;