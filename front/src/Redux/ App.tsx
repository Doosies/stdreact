import React from 'react'
import TodosContainer from './components/TodosContainer';
import CounterContainer from './containers/CounterContainer'

function App() {
    return (
        <div>
            <CounterContainer />
            <TodosContainer />
        </div>
    )
}

export default App;