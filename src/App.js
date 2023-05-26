import React, {useMemo, useState} from "react";
import "./styles/app.css"
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import Select from "./Component/UI/Select/Select";
import MyInput from "./Component/UI/input/MyInput";
import PostFIlter from "./Component/PostFIlter";

function App() {


    const [posts, setPosts] = useState([
        {id: 1, title: 'A', body: 'A'},
        {id: 2, title: 'B 2', body: 'B'},
        {id: 3, title: 'C 3', body: 'C'}
    ])
    const [filter, setFilter] = useState({sort: '', searchQuery: ''})



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
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }




    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFIlter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length
                ? <PostList posts={sortedAndSearchedPosts} title={"Посты про JS"} remove={removePost}/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
            }


        </div>
    );
}

export default App;
