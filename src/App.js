import React, {useEffect, useMemo, useRef, useState} from "react";
import "./styles/app.css"
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import PostFilter from "./Component/PostFIlter";
import Modal from "./Component/UI/Modal/Modal";
import MyButton from "./Component/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./Component/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./Component/UI/pagination/Pagination";

function App() {


    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', searchQuery: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)


    const [fetchPost, isPostLoading, postError] = useFetching( async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchQuery)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)

    }

    useEffect(() => {fetchPost()}, [page])


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
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                postError && <h1>Произошла ошибка ${postError}</h1>
            }
            {
                isPostLoading
                    ? <div style={{display: "flex", justifyContent: "center", marginTop: "50px" }}><Loader/></div>
                    : <PostList posts={sortedAndSearchedPosts} title={"Посты про JS"} remove={removePost}/>

            }

            <Pagination changePage={changePage} page={page} totalPages={totalPages} />




        </div>
    );
}

export default App;
