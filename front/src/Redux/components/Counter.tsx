import React, { Dispatch } from 'react'
import { useDispatch } from 'react-redux'

interface CounterType {
    number: number;
    diff: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onSetDiff: (diff: number) => void;
}

function Counter ({number, diff, onIncrease, onDecrease, onSetDiff}:CounterType) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSetDiff(parseInt(e.target.value, 10));
    };
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;