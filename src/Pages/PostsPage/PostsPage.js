import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { PostCard } from './PostCard/PostCard';

export const PostsPage = ({ posts, nickname, authorization, currentUser }) => {
    const { loading } = useSelector((state) => state.posts);

    return (
        <PostsContainer>
            {!posts ? (
                <H2>No posts</H2>
            ) : (
                <>
                    <H2>{nickname || 'Noname'} posts</H2>
                    {posts.map((post) => (
                        <PostCard
                            key={post.postId}
                            informationPost={post}
                            nameUser={nickname}
                            loading={loading}
                            authorization={!authorization}
                            currentUser={currentUser}
                        />
                    ))}
                </>
            )}
        </PostsContainer>
    );
};

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
`;

const PostsContainer = styled.div`
    width: 100%;
`;
