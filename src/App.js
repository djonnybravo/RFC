import React, {useMemo, useState} from "react";
import "./styles/app.css"
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import Select from "./Component/UI/Select/Select";
import MyInput from "./Component/UI/input/MyInput";

function App() {


    const [posts, setPosts] = useState([
        {id: 1, title: 'A', body: 'A'},
        {id: 2, title: 'B 2', body: 'B'},
        {id: 3, title: 'C 3', body: 'C'}
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')



    let sortedPosts = useMemo( () => {
        console.log('SORTED POST IS WORKED')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo( () => {
        return sortedPosts.filter( post => post.title.includes(searchQuery))
    }, [searchQuery, sortedPosts])
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)

    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск.."
                />
                <Select
                    defaultValue="Сортировка по"
                    options={[
                        {value: 'title', name: "По заголовку"},
                        {value: 'body', name: "По описанию"},
                    ]}
                    value={selectedSort}
                    onChange={sortPosts}
                />
            </div>
            {posts.length
                ? <PostList posts={sortedAndSearchedPosts} title={"Посты про JS"} remove={removePost}/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
            }


        </div>
    );
}

export default App;
