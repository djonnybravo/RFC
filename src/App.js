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

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    type={"text"}
                    placeholder={'Название поста'}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <MyInput
                    type={"text"}
                    placeholder={'Описание поста'}
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>

            </form>
            <PostList posts={posts} title={"Посты про JS"}/>

        </div>
    );
}

export default App;
