import React, {useEffect, useState} from "react";
import '../styles/app.css'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyButton from "../Component/UI/button/MyButton";
import Modal from "../Component/UI/Modal/Modal";
import PostForm from "../Component/PostForm";
import {getPageCount} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import PostList from "../Component/PostList";
import Pagination from "../Component/UI/pagination/Pagination";
import PostFilter from "../Component/PostFIlter";
import Loader from "../Component/UI/Loader/Loader";


function Posts() {


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

            <Pagination
                changePage={changePage}
                page={page}
                totalPages={totalPages}
            />




        </div>
    );
}

export default Posts;
