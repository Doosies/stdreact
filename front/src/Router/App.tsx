import React from 'react'
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
            </ul>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
        </div>
    )
}

export default App;