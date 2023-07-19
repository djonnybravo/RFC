import React from 'react';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import './styles/app.css'
import About from "./pages/About";
import Posts from "./pages/Posts";

const App = () => {
    return (
        <div className={'app'}>
            <div className={'navbar'}>
                <div className={'navbar__items'}>
                    <Link to={'/posts'}>Posts</Link>
                    <Link to={'/about'}> About</Link>
                </div>
            </div>

            <Routes>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'*'} element={<Navigate to={'/posts'} />}/>
            </Routes>


        </div>

    );
};

export default App;