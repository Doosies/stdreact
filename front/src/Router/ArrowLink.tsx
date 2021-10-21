import React, {Component, useState} from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

interface ArrowLinkProps {
    exact?: boolean;
    to: string;
    label: string;
    children?: React.ReactNode;
}

const ArrowLink = ({to, label, exact, children}: ArrowLinkProps) => {
    const match = useRouteMatch({
        path: to,
        exact: exact
    });
    console.log(match);
    return <div>
                
                <Link to={to} style={{background:match?'red':'white', color:match?'white':'black'}}>
                    {match&&">>"}
                    {label}
                </Link>
            </div>;
}

export default ArrowLink;