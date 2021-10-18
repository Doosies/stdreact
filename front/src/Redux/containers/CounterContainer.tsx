import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    const {number, diff} = useSelector((state:RootState) => state.counter)

    const dispatch = useDispatch();
    const handleIncrease = () => dispatch(increase());
    const handleDecrease = () => dispatch(decrease());
    const handleSetDiff = (diff: number) => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onSetDiff={handleSetDiff}
        />
    );
}

export default CounterContainer;