
import React, { useState, useEffect } from 'react';


const CountUseEffect = () => {

    const [count, setCount] = useState(0);
    // const [ren, setRen] = useState(0);

    console.log('Count ', count)

    return (
        <div>
            <p onClick={() => setCount(count + 1)}>
                Click count  {count}  click me!
          </p>
        </div>
    )
}

export default CountUseEffect;