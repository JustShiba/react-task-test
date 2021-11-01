import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllPosts__START } from '../../../redux/reducers/postsReducer'
import PostCard from './PostCard'


export const PostsPage = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getAllPosts__START())
    }, [dispatch])

    return(
        <PostsContainer>
            <H2>All posts</H2>
            {state.allPosts.map(post => (<PostCard key={post.postId} inf={post}/>))}
        </PostsContainer>
    )
}

const H2 = styled.h2`
color: white;
padding-bottom: 15px;
font-size: 30px;
`

const PostsContainer = styled.div`
    width: 100%;
`