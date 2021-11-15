import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import styled from 'styled-components'

import { createPostStart } from '../../../../../src/redux/posts/postsReducer'
import { validate } from './validatePost'
import { Btn } from '../../styled'
import { Loader } from '../../../../../src/components/Loader/Loader'


export const AddPost = () => {
    const dispatch = useDispatch()
    const { title, body, loading } = useSelector(state => state.posts.postCreateInp)

    const formik = useFormik({
        initialValues: {
            title,
            body,
        },
        validate,
        onSubmit: values => {
            dispatch(createPostStart(values))
            formik.resetForm();
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            {loading ? <Loader/> :
                <>
                    <H2>Create post</H2>
                    <Box>
                        <TitleSection htmlFor="title">Title</TitleSection>
                        <AddPostTitleInp
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                        />
                        {formik.errors.title ? <Err>{formik.errors.title}</Err> : null}
                    </Box>

                    <Box>
                        <TitleSection htmlFor="body">Body</TitleSection>
                        <AddPostInp
                            id="body"
                            name="body"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.body}
                        />
                        {formik.errors.body ? <Err>{formik.errors.body}</Err> : null}
                    </Box>

                    <AddPostBtn type="submit">Submit</AddPostBtn>
                </>}
        </form>
    );
}

const Err = styled.span`
    text-align: center;
    color: red;
    text-transform: uppercase;
    font-size: 10px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleSection = styled.label`
    text-align: center;
    color: white;
    font-size: 20px;
    margin-top: 15px;
`

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
    margin-bottom: 0;
`

const AddPostInp = styled.textarea`
    font: 18px system-ui;
    font-weight: 400;
    color: white;
    background-color: inherit;
`

const AddPostBtn = styled(Btn)`
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 10px auto;
    display: block;
`