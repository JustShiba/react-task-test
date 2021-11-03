import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Loader from '../../Loader'
import PostCard from './PostCard'


export const PostsPage = ({posts, nickname, auth}) => {
    
    const { loading } = useSelector(state => state.posts)
    
    return(
        <PostsContainer>
            {(!posts || !nickname) ? <Loader/> : 
            <>
                <H2>{nickname ? nickname : 'noname'} posts</H2>
                {posts.map(post => (<PostCard 
                                        key={post.postId} 
                                        inf={post} 
                                        name={nickname} 
                                        loading={loading} 
                                        auth={!auth}
                                    />))}
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