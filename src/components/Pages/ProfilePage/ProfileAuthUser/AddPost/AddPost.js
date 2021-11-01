import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Btn } from '../../styled'

import { changePostTitle, changePostBody } from '../../../../../redux/reducers/postsReducer'

export const AddPost = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.posts)

    const { title, body } = state.postCreateInp
    console.log(title, body)
    return (
        <Box>
            <AddPostTitleInp value={title} onChange={(e) => {
                dispatch(changePostTitle(e.target.value))
            }}/>
            <AddPostInp rows='5' value={body} onChange={(e) => {
                dispatch(changePostBody(e.target.value))
            }}/>
            <AddPostBtn>Add post!</AddPostBtn>
        </Box>
    )
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const AddPostTitleInp = styled.input`
    font: 28px system-ui;
    font-weight: 600;
    color: white;
    background-color: inherit;
    margin-top: 25px;
    margin-bottom: 10px;
`

const AddPostInp = styled.textarea`
    max-width: 851px;
    font: 18px system-ui;
    font-weight: 500;
    color: white;
    background-color: inherit;
`

const AddPostBtn = styled(Btn)`
    font-family: Montserrat;
    padding: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    margin-bottom: 10px;
`