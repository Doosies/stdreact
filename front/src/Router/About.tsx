import React, {useState} from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import qs from 'qs'

interface AboutRouterProps {
    
}
const About = () => {
    const location = useLocation();
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const detail = query.detail === 'true';

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습함.</p>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고...</p>}
        </div>
    );
}

export default About;