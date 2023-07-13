import React, {useMemo, useState} from "react";
import "./styles/app.css"
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import Select from "./Component/UI/Select/Select";
import MyInput from "./Component/UI/input/MyInput";
import PostFIlter from "./Component/PostFIlter";
import Modal from "./Component/UI/Modal/Modal";
import MyButton from "./Component/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {


    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', searchQuery: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchQuery)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton
                style={{marginTop: "20px"}}
                onClick={() => setModal(true)}
            >
                Добавить пост
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>

            <hr style={{margin: '15px 0'}}/>
            <PostFIlter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} title={"Посты про JS"} remove={removePost}/>


        </div>
    );
}

export default App;
