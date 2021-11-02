import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllPosts__START } from '../../../redux/reducers/postsReducer'
import PostCard from './PostCard'


export const PostsPage = ({ allPostsOrNot }) => {
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    const statePosts = state.posts 

    useEffect(() => {
        dispatch(getAllPosts__START())
    }, [dispatch])

    return(
        <PostsContainer>
            <H2>Posts</H2>
            {statePosts.allPosts
                .filter((item) => {
                    return allPostsOrNot || 
                        ((!state.users.otherUser && 
                            item.userId === state.authorization.personalInf.userId) || 
                        item.userId === state.users.currentUserId)
                })
                .map(post => (<PostCard key={post.postId} inf={post}/>))}
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