import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Btn } from '../../styled'
import { 
    changePostTitle, 
    changePostBody, 
    createPost__START 
} from '../../../../../src/redux/posts/postsReducer'
import { Loader } from '../../../../../src/components/Loader/Loader'

export const AddPost = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.posts)
    
    const { title, body } = state.postCreateInp
    const { loading } = state
    return (
        <Box>
            <H2>Create post</H2>
            {loading ? 
                <Loader/>:
                <InputBox>
                    <AddPostTitleInp value={title} onChange={(e) => {
                        dispatch(changePostTitle(e.target.value))
                    }}/>
                    <AddPostInp rows='5' value={body} onChange={(e) => {
                        dispatch(changePostBody(e.target.value))
                    }}/>
                </InputBox>
            }
            <AddPostBtn onClick={() => dispatch(createPost__START())}>Add post!</AddPostBtn>
        </Box>
    )
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const InputBox = styled(Box)``

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
`

const AddPostTitleInp = styled.input`
    font: 25px system-ui;
    font-weight: 500;
    color: white;
    background-color: inherit;
    margin-bottom: 10px;
`

const AddPostInp = styled.textarea`
    font: 18px system-ui;
    font-weight: 400;
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