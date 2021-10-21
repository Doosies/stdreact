import React, {useState} from 'react';
import { RouteComponentProps, useHistory, useLocation, useRouteMatch, withRouter } from 'react-router';

interface WithRouterSampleProps {
    
}
// const WithRouterSample = ({location, match, history}:RouteComponentProps) => {
const WithRouterSample = () => {
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();

    return (
        <div>
            <h4>location</h4>
            <textarea value={JSON.stringify(location,null,2)} readOnly/>
            <h4>match</h4>
            <textarea value={JSON.stringify(match,null,2)} readOnly/>
            <button onClick={()=>history.push('/')}>홈으로</button>
        </div>
    );
}

export default (WithRouterSample);