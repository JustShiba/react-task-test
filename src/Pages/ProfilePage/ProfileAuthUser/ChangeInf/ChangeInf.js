import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import styled from 'styled-components'

import { H2, Line } from '../../styled'
import { validate } from './validateUser'
import { Loader } from '../../../../components/Loader/Loader'
import { setNickPhoneStart } from '../../../../redux/auth/authReducer'

export const ChangeInf = ({ nickname, phone }) => {
    const { loading } = useSelector(state => state.authorization.userInfInp)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            nickname,
            phone,
        },
        validate,
        onSubmit: values => {
            dispatch(setNickPhoneStart(values))
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Line />
            {loading ? <Loader/> :
                <>
                    <H2>Add information</H2>
                    <Box>
                        <TitleSection htmlFor="nickname">Nickname</TitleSection>
                        <ChangeInp
                            id="nickname"
                            name="nickname"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.nickname}
                        />
                        {formik.errors.nickname ? <Err>{formik.errors.nickname}</Err> : null}
                    </Box>

                    <Box>
                        <TitleSection htmlFor="phone">Phone</TitleSection>
                        <ChangeInp
                            id="phone"
                            name="phone"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.errors.phone ? <Err>{formik.errors.phone}</Err> : null}
                    </Box>

                    <AddPostBtn type="submit">Submit</AddPostBtn>
                </>}
        </form>
    )
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
    align-items: center;
`

const TitleSection = styled.label`
    text-align: center;
    color: white;
    font-size: 20px;
    margin-top: 15px;
`

const ChangeInp = styled.input`
    padding: 0 15px;
    height: 50px;
    width: 500px;
    font: 25px system-ui;
    font-weight: 500;
    color: black;
    border: none;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 25px;
`

const AddPostBtn = styled.button`
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 10px auto;
    display: block;
    background-color: #4328b7;
    color: white;   
    border: none;
    transition: 300ms;
    cursor: pointer;
    text-transform: uppercase;
    
    &:hover{
        background-color: #1b1f50
}
`