import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
// import Profile from './Profile';
import Profiles from './Profiles';

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
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={HistorySample}/>
                <Route
                    //path를 정의하지 않으면 모든상황
                    render={({location}:RouteComponentProps)=>(
                        <div>
                            <h2>이 페이지는 존재하지 않습니다.</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )}
                />
            </Switch>
            
        </div>
    )
}

export default App;