import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { changePostInfStart, deletePostStart } from '../../../../src/redux/posts/postsReducer'
import { Loader } from '../../../../src/components/Loader/Loader'
import { Comments } from './Comments/Comments'


export const PostCard = ({ informationPost, nameUser, loading, authorization, currentUser }) => {
    const { likes, body, postId, title, comments } = informationPost

    let [change, setChange] = useState(false)
    let [commentsSate, setComments] = useState(false)
    let [titlePost, setTitle] = useState(title)
    let [bodyPost, setBody] = useState(body)
    
    const dispatch = useDispatch()

    return(
        <Box>
            {loading ? 
                <Loader/> :
                <>
                    {authorization ? 
                    <ChangePost onClick={() => {
                        setChange(!change)
                        setComments(commentsSate = false)
                    }}>Change Post</ChangePost> : 
                    null
                }
                <PostContainer>
                    <CommentsBtn onClick={() => {
                        setComments(!commentsSate)
                        setChange(change = false)
                    }}>Comments</CommentsBtn>
                    <PostCardBox>
                        <Information>
                            <InformationUser>
                                <H3>{nameUser || 'Noname'}</H3>
                            </InformationUser>
                            <InformationLikes>
                                {likes} Likes
                            </InformationLikes>
                        </Information>
                        <InformstionPost>
                            {change ? 
                                <ChangeInp 
                                    value={titlePost} 
                                    onChange={(e) => setTitle(titlePost = e.target.value)}/> : 
                                <H4>{title}</H4>
                            }
                            {change ? 
                                <ChangeInp 
                                    value={bodyPost} 
                                    onChange={(e) => setBody(bodyPost = e.target.value)}/> : 
                                <P>{body}</P>
                            }
                        </InformstionPost>
                        {change ? 
                            <ConfirmChangeBtn 
                                onClick={() => {
                                    dispatch(changePostInfStart({titlePost, bodyPost, postId}))
                                    setChange(!change)
                                }}
                            >Confirm</ConfirmChangeBtn> :
                            null
                        }  
                    </PostCardBox>
                    {authorization ? 
                        <DeletePost onClick={() => {
                            dispatch(deletePostStart(postId))
                        }}>Delete</DeletePost> :
                        null
                    }
                </PostContainer>
                {commentsSate ? 
                    <Comments informationComments={comments} postId={postId} loading={loading} currentUser={currentUser}/> : 
                    null
                }
                </>
            }
            
        </Box>
    )
}

const ConfirmChangeBtn = styled.button`
    text-transform: uppercase;
    color: #4328b7;
    font-weight: 800;
    cursor: pointer;    
    border: none;
    border-radius: 0;
    padding: 5px 0;
    transition: 200ms;
    
    &:hover {
        letter-spacing: 1px;
    }
`

const ChangeInp = styled.input`
    font: 15px system-ui;
    font-weight: 500;
    color: white;
    background-color: inherit;
    margin-bottom: 5px;
`

const H3 = styled.h3`
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 2.5px;
`

const ChangePost = styled.div`
    background-color: cadetblue;
    text-align: center;
    padding: 4px 0;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    transition: 200ms;
    cursor: pointer;
    
    &:hover {
        letter-spacing: 1px;
    }
`

const PostContainer = styled.div`
    display: flex;
`

const Box = styled(PostContainer)`
    flex-direction: column;
`

const CommentsBtn = styled.div`
    background-color: lightcoral;
    padding: 0 10px;
    text-align: center;
    margin-bottom: 35px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    writing-mode: vertical-lr; 
    transition: 200ms;
    cursor: pointer;
    
    &:hover {
        padding: 0 15px;
    }
`

const DeletePost = styled(CommentsBtn)`
    background-color: mediumvioletred;
`

const PostCardBox = styled.div`
    width: 100%;
    height: 150px;
    margin-bottom: 35px;
    background-color: #3324c4;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 13px -7px #a49bff;
    color: white;
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 15px 0 15px;

`

const InformationUser = styled.div``

const InformationLikes = styled.span`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
`

const H4 = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
`

const P = styled.p`
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 21px 0;
`

const InformstionPost = styled.div`
    margin: 5px 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
