import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState(null)
    const [fetchPostById, isLoading, error ] = useFetching(async (id) => {
        const response =  await PostService.getById(id)
        setPost(response.data)
    })


    useEffect( () => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли пост с ID #{params.id}</h1>
            {is}
            <div>{post.id}. {post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostIdPage;