import React from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import './styles/app.css'
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Component/UI/Navbar/Navbar";

const App = () => {
    return (
        <div className={'app'}>
            <Navbar/>

            <Routes>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'*'} element={<Navigate to={'/posts'}/>}/>
            </Routes>

        </div>

    );
};

export default App;