import React from 'react';
import './styles/app.css'
import Navbar from "./Component/UI/Navbar/Navbar";
import AppRouter from "./Component/AppRouter";

const App = () => {
    return (
        <div className={'app'}>
            <Navbar/>
            <AppRouter/>
        </div>

    );
};

export default App;