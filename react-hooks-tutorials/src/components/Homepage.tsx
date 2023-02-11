import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <Link to={`/useEffects1`}> useEffects1 </Link>
            <br />
            <Link to={`/useEffects2`}> useEffects2 </Link>
            <br />
            <Link to={`/useEffects3`}> useEffects3 </Link>
        </>
    );
};

export default Homepage;
