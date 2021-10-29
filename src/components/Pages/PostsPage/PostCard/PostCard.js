import styled from 'styled-components'


export const PostCard = () => {
    return(
        <PostCardBox>
            <Information>
                <InformationUser>
                    <H3>Name Lastname</H3>
                    <NickName>NickName</NickName>
                </InformationUser>
                <InformationLikes>
                    100 Likes
                </InformationLikes>
            </Information>
            <InformstionPost>
                <H4>Title</H4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </InformstionPost>
        </PostCardBox>
    )
}

const H3 = styled.h3`
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 2.5px;
`

const PostCardBox = styled.div`
    width: 100%;
    margin-bottom: 35px;
    background-color: #3324c4;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 13px -7px #a49bff;
    color: white;
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 15px 0px 15px;

`

const InformationUser = styled.div``

const NickName = styled.a`
    font-size: 12px;
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-weight: 700;
    text-decoration: none;
    color: white;
`

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

const InformstionPost = styled.div`
    margin: 15px 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
