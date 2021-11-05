import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { sendComment__START } from '../../../../../redux/reducers/postsReducer'
import UserComment from './UserComment'

export const Comments = ({ inf, postId, loading }) => {
    const dispatch = useDispatch()
    let [ comment, setComment ] = useState('')

    return (
        <>
            {loading ? 
                null :
                <Cont>
                    <h2>Comments</h2>
                    <AddCommentBox>
                        <AddCommentInp 
                            value={comment} 
                            onChange={(e) => setComment(comment = e.target.value)}
                        />
                        <SendCommentBtn 
                            onClick={() => {
                                dispatch(sendComment__START({comment, postId}))
                                setComment(comment = '')
                            }}
                        >Send</SendCommentBtn>
                    </AddCommentBox>
                    <UsersComments>
                        {inf[0] ?
                            inf.map((comment) => <UserComment inf={comment} postId={postId} key={comment.commentId}/>): 
                            <h2>There is no comments yet</h2>}
                    </UsersComments>
                </Cont>
            }
        </>
    )
}

const UsersComments = styled.div``

const AddCommentBox = styled.div`
    display: flex;
    margin-bottom: 25px;
`

export const AddCommentInp = styled.input`
    width: 100%;
    font: 20px system-ui;
    font-weight: 500;
    color: white;
    background-color: inherit;
    border: 2px solid #4328b7;
`

const SendCommentBtn = styled.button`
    border-radius: 0px;
    border: none;
    letter-spacing: 2px;
    font-size: 13px;
    font-family: 'Titillium Web',Helvetica,Arial,Lucida,sans-serif!important;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #4328b7;
    padding: 7px 20px;
    transition: 200ms;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #1b1f50;
    }
`

const Cont = styled.div`
    color: white;
    margin: -35px 0 25px 0;
    padding: 0 0 10px 15px;
    border: 4px solid lightcoral;
    border-top: none;
    border-right: none;
    border-radius: 0px 0px 0px 10px;
`