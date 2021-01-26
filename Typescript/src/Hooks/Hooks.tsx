
import React, { useState } from 'react'

const Hooks = () => {

    const [count, setCount] = useState(0)
    return (

        <div>
            <p>You clicked {count} times </p>
            <button className="btn btn-danger" onClick={() => { setCount(count + 1) }}>Hooks Example</button>
        </div>
    )
}

export default Hooks