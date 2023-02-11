import React from 'react';
import UseEffects1 from './components/useEffects/UseEffects1';
import UseEffects2 from './components/useEffects/UseEffects2';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/useEffects1" element={<UseEffects1 />}></Route>
            <Route path="/useEffects2" element={<UseEffects2 />}></Route>
        </Routes>
    );
};

export default App;
