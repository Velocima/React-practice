import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = adds => adds? setCount(prevCount => ++prevCount) : setCount(prevCount => --prevCount); // Cannot directly mutate the original state! So we are using the accessor instead ("prevCount")

    return (
        <div>
            <button onClick={() => incrementCounter(false)}>-</button>
            <span>{count}</span>
            <button onClick={() => incrementCounter(true)}>+</button>
        </div>
    )
};

export default Counter;