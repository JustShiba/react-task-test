import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllPosts__START } from '../../../redux/reducers/postsReducer'
import Loader from '../../Loader'
import PostCard from './PostCard'

/**
 * Посмотреть страницы постов и карточек постов, поменять на использование только запроста юзера, 
 * убрать цикл в сагах на никнейм, пропсы посмотреть на постпаге, разобраться с пост кард
 */

export const PostsPage = ({posts, nickname}) => {
    // const dispatch = useDispatch()
    const { loading } = useSelector(state => state.posts)
    // const statePosts = state.posts 
    // const stateUsers = state.users
    // const { personalInf } = state.authorization
    
    // useEffect(() => {
    //     dispatch(getAllPosts__START())
    // }, [dispatch])
    
    return(
        <PostsContainer>
            {(!posts || !nickname) ? <Loader/> : 
            <>
                <H2>{nickname ? nickname : 'noname'} posts</H2>
                {posts.map(post => (<PostCard key={post.postId} inf={post} name={nickname} loading={loading}/>))}
            </>
            }
            
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