import React, {useMemo, useState} from "react";
import "./styles/app.css"
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import Select from "./Component/UI/Select/Select";
import MyInput from "./Component/UI/input/MyInput";
import PostFIlter from "./Component/PostFIlter";
import Modal from "./Component/UI/Modal/Modal";
import MyButton from "./Component/UI/button/MyButton";

function App() {


    const [posts, setPosts] = useState([
        {id: 1, title: 'Первый пост', body: '1'},
        {id: 2, title: 'Второй пост', body: '2'},
        {id: 3, title: 'Третий пост', body: '3'}
    ])
    const [filter, setFilter] = useState({sort: '', searchQuery: ''})
    const [modal, setModal] = useState(false)


    let sortedPosts = useMemo( () => {
        console.log('SORTED POST IS WORKED')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo( () => {
        return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
    }, [filter.searchQuery, sortedPosts])

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
