import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { selectUserId } from '../../../../redux/reducers/usersReducer'

export const UserCard = ({info}) => {
    const { email, nickname, phone, posts, userId } = info
    
    const dispatch = useDispatch()


    return (
        <UserCardBox id={userId} onClick={() => dispatch(selectUserId(userId))}> 
            <Information>
                <H3>{nickname || 'Your nickname'}</H3>
                <Posts>{posts.length} <span>posts</span></Posts>
            </Information>
            <Information>
                <Email href='#'>{email}</Email>
                <Phone href='#'>{phone || 'No phone number'}</Phone>
            </Information>
        </UserCardBox>
    )
}

const UserCardBox = styled.div`
    width: 100%;
    height: 100px;
    padding: 15px 15px;
    margin-bottom: 35px;
    background-color: #3324c4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 0px 8px 20px -10px #a49bff;
    color: white;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        box-shadow: 0px 10px 13px -7px #a49bff;
    }
`
const H3 = styled.h3`
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 2.5px;
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

const Information = styled.div``

const Posts = styled.p`
    margin-top: 25px;
    font-size: 25px;
    font-weight: 900;
    & span {
        font-size: 20px;
        font-weight: 500;
    }
`