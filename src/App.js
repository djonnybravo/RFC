import React, {useState} from "react";
import "./styles/app.css"
import PostItem from "./Component/PostItem";
import PostList from "./Component/PostList";

function App() {


    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])


    return (
        <div className="App">
            <form>
                <input type={"text"} placeholder={'Название поста'}/>
                <input type={"text"} placeholder={'Описание поста'}/>
                <button>Создать пост</button>
            </form>
            <PostList posts={posts} title={"Посты про JS"}/>

        </div>
    );
}

export default App;
