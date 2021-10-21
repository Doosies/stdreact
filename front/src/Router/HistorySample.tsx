import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';

interface HistorySampleProps {
    
}

const HistorySample = () => {
    const history = useHistory();

    const goBack = () => {history.goBack();}
    const goHome = () => {history.push('/');}

    useEffect(() => {
        console.log(history);
        const unblock = history.block('정말 떠나시나요?');
        return () => {
            unblock();
        };
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    );
}

export default HistorySample;