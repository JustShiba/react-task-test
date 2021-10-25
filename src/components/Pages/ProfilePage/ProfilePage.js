import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { 
    changeNickInp, 
    changePhoneInp,
    deleteUser__START,
    getDataCurrentUser__START,
    setNick__START,
    setPhone__START
} from '../../../redux/reducers/logSignReducer'
import Loader from '../../Loader'


export const ProfilePage = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.authorization)
    
    const { email, nickname, phone } = state.personalInf
    const phoneInp = state.userInfInp.phone
    const nickInp = state.userInfInp.nickName
    const loading = state.loading

    useEffect(() => {
        dispatch(getDataCurrentUser__START())
    }, [dispatch])

    return(
        <ProfilePageContainer>
            {loading?
            <Loader/>:
            <>
            <InpBox>
                <H2>{nickname ? `Personal information: ${nickname}`  : 'Your Nickname: '}</H2>
                <CustomInp 
                    value={nickInp} 
                    onChange={(e) => {
                        dispatch(changeNickInp(e.target.value))
                    }}
                /> 
                <Btn onClick={() => {
                    dispatch(setNick__START())
                }}>{nickname ? 'change nick' : 'add nick'}</Btn>
            </InpBox>
            <Email>{email}</Email>  
            <Box>            
                <InpBox2>
                    <Phone>{phone}</Phone>
                    <CustomInp2 
                        value={phoneInp} 
                        onChange={(e) => {
                            dispatch(changePhoneInp(e.target.value))
                        }}
                    /> 
                    <Btn onClick={() => {
                        dispatch(setPhone__START())
                    }}>{phone ?  'change phone' :'add phone'}</Btn>
                </InpBox2>
                <DeleteBtn
                    onClick={() => {
                        dispatch(deleteUser__START())
                    }}
                    >DELETE ACCAUNT</DeleteBtn>
            </Box>
            </>}
            
            <Line/>
        </ProfilePageContainer>
    )
}

const Box = styled.div`
    display: flex;
    justify-content: space-between;
`

const Btn = styled.button`
    background-color: #4328b7;
    color: white;   
    border: none;
    transition: 300ms;
    cursor: pointer;
    &:hover{
        background-color: #1b1f50
    }
`

const DeleteBtn = styled(Btn)`
    background-color: crimson;
`

const InpBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 0;
    & h2{
        margin: 0 10px 0 0;
        padding-bottom: 0;
    }
`

const InpBox2 = styled(InpBox)`
    margin: initial;
`

const CustomInp = styled.input`
    background-color: inherit;
    border: 1px solid white;
    border-radius: 5px;
    padding: 3px 10px;
    color: white;
    font-weight: bold;
    font-size: 30px;
    border-radius: 0;
    width: 150px;
`

const CustomInp2 = styled(CustomInp)`
    font-size: 15px;
`

const Line = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #BBB5CD;
    border: none;
`

const ProfilePageContainer = styled.div`
    width: 100%;
`

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
`

const Phone = styled.a`
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-weight: 700;
    text-decoration: none;
    color: white;
`

const Email = styled(Phone)`
    font-size: 12px;
    color: #bbb4ff;
`