import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getAllPosts__START } from '../../../redux/reducers/postsReducer'
import { apiCallUsers } from '../../../redux/reducers/usersReducer'
import { Loader } from '../../Loader/Loader'
import { PostCard } from './PostCard/PostCard'


export const AllPostsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(apiCallUsers())
        dispatch(getAllPosts__START())
    }, [dispatch])

    const { loading, allPosts } = useSelector(state => state.posts)
    const auth = false
    return(
        <PostsContainer>
            {allPosts ? 
                <>
                    <H2>All posts</H2>
                    {allPosts.map(post => (<PostCard 
                                            key={post.postId} 
                                            inf={post} 
                                            name={post.nickname} 
                                            loading={loading} 
                                            auth={auth}
                                        />))}
                </>:
                <Loader/> 
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