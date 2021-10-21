import React, {} from 'react';
import { useParams, useRouteMatch } from 'react-router';

const profileData = {
    velopert: {
        name: '송민형',
        description:
            'Frontend Engineer @ Me. 취미가 개발인 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '전래동화의 주인공'
    }
};

interface MatchProps {
    username: 'velopert' | 'gildong';
}
const Profile = () => {
    // 리액트 route 5.1이상에 추가된 기능
    // math.param의 값을 사용함.
    const {username} = useParams<MatchProps>();
    const profile = profileData[username];
    
    if(!profile ) {
        return <div>존재하지 않는 유저입니다.</div>
    }

    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>    
    );
};

export default Profile;