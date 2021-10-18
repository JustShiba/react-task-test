import styled from 'styled-components'
import PostCard from './PostCard'

const PostsContainer = styled.div`
    width: 100%;
`

const PostsFromApi = [1, 2, 3]

export const PostsPage = () => {
    return(
        <PostsContainer>
            {PostsFromApi.map(post => (<PostCard key={post}/>))}
        </PostsContainer>
    )
}