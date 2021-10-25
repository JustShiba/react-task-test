import styled from 'styled-components'
import PostCard from './PostCard'


const PostsFromApi = [1, 2, 3]

export const PostsPage = () => {
    return(
        <PostsContainer>
            <H2>All posts</H2>
            {PostsFromApi.map(post => (<PostCard key={post}/>))}
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