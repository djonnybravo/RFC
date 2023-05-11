import React, {useState} from "react";
import "./styles/app.css"
import PostItem from "./Component/PostItem";
import PostList from "./Component/PostList";

function App() {

    let [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body: 'Description'},
        {id:2, title: 'Javascript 2', body: 'Description'},
        {id:3, title: 'Javascript 3', body: 'Description'}
    ])


    return (
        <div className="App">
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
