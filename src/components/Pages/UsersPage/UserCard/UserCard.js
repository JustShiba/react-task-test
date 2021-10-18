import styled from 'styled-components'

export const UserCard = () => {
    return (
        <UserCardBox>
            <Information>
                <H3>Name Lastname</H3>
                <NickName>NickName</NickName>
                <Posts>15 <span>posts</span></Posts>
            </Information>
            <Information>
                <Email href='#'>email@gmail.com</Email>
                <Phone href='#'>+375 29 152 14 58</Phone>
                <Likes><span>Total likes:</span> 1000</Likes>
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
    box-shadow: 0px 10px 13px -7px #a49bff;
    color: white;
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

const NickName = styled(Email)``

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

const Likes = styled(Posts)`
    margin-top: 40px;
    font-weight: 700;
`