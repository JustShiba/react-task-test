import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { changeCommentStart, deleteCommentStart } from '../../../../../../src/redux/posts/postsReducer'

export const UserComment = ({ informationUserComment, postId, currentUser }) => {
    const { body, commentId, userId } = informationUserComment
    const personalUserId = useSelector(state => state.authorization.personalInformationUser.userId)

    const dispatch = useDispatch()
    let [commentTextUser, setCommentTextUser] = useState(body)
    
    useEffect(() => {
        setCommentTextUser(body)
    }, [body])

    const [changeCommentText, setChangeCommentText] = useState(false)

    return (
        <UserCommentBox>
            {changeCommentText ? 
                <ChangeCommentInp 
                    value={commentTextUser} 
                    onChange={(e) => setCommentTextUser(commentTextUser = e.target.value)}
                /> :
                <TextComment>{commentTextUser}</TextComment>
            }
            {(userId === personalUserId) ?  
                <ButBox>
                    {changeCommentText ?  
                        <CangeCommentBtn 
                            onClick={() => {
                                const config = currentUser 
                                dispatch(changeCommentStart({ postId, commentId, commentTextUser, config }))
                            }}
                        >Save</CangeCommentBtn> : 
                        <CangeCommentBtn 
                            onClick={() => setChangeCommentText(!changeCommentText)}
                        >Change</CangeCommentBtn>
                    }
                    
                    <DeleteCommentBtn 
                        onClick={() => {
                            const config = currentUser
                            dispatch(deleteCommentStart({ postId, commentId, config }))
                        }}

                    >Delete</DeleteCommentBtn>
                </ButBox> : 
                null   
            }
        </UserCommentBox>
    )
}

const TextComment = styled.div`
    padding: 0 200px 0 0;
`

const CangeCommentBtn = styled.button`
    border: none;
    padding: 0 15px;
    background-color: lightcoral;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    writing-mode: vertical-lr; 
    transition: 200ms;
    cursor: pointer;
    
    &:hover {
        padding: 0 20px;
    }
`

const DeleteCommentBtn = styled(CangeCommentBtn)`
    background-color: mediumvioletred;
    border-radius: 0 24px 24px 0;
`

const ButBox = styled.div`
    display: flex;
    height: 100%;
    position: absolute;
    right: 0;
`

const ChangeCommentInp = styled.input`
    width: 620px;
    font: 18px system-ui;
    font-weight: 500;
    color: white;
    background-color: inherit;
    border-radius: 25px 25px 25px 25px;
    padding: 7px 0 7px 15px;
`



const UserCommentBox = styled.div`
    min-height: 20px;
    position: relative;
    padding: 10px 0 10px 15px;
    border: 2px solid lightcoral;
    align-items: center;
    margin: 5px 15px 5px 0;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
`