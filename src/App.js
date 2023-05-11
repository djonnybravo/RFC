import React, {useRef, useState} from "react";
import "./styles/app.css"
import PostItem from "./Component/PostItem";
import PostList from "./Component/PostList";
import MyButton from "./Component/UI/button/MyButton";
import MyInput from "./Component/UI/input/MyInput";

function App() {


    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'}
    ])

   const [post, setPost] = useState({title: "", body: ""})


    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: "", body: ""})
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    type={"text"}
                    placeholder={'Название поста'}
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />
                <MyInput
                    type={"text"}
                    placeholder={'Описание поста'}
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>

            </form>
            <PostList posts={posts} title={"Посты про JS"}/>

        </div>
    );
}

export default App;
