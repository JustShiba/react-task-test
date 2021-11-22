import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getAllPostsStart } from 'redux/posts/postsReducer';
import { addUsersStart } from 'redux/users/usersReducer';
import { Loader } from 'components/Loader/Loader';
import { PostCard } from './PostCard/PostCard';

export const AllPostsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addUsersStart());
        dispatch(getAllPostsStart());
    }, [dispatch]);

    const { loading, allPosts } = useSelector((state) => state.posts);

    return (
        <PostsContainer>
            {allPosts ? (
                <>
                    <H2>All posts</H2>
                    {allPosts.map((post) => (
                        <PostCard
                            key={post.postId}
                            informationPost={post}
                            nameUser={post.nickname}
                            loading={loading}
                            authorization={false}
                        />
                    ))}
                </>
            ) : (
                <Loader />
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
