import styled from 'styled-components'


export const Box = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Btn = styled.button`
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

export const DeleteBtn = styled(Btn)`
    background-color: crimson;
`

export const ChangeBtn = styled(DeleteBtn)`
    background-color: blue;
    margin-right: 10px;
`

export const InpBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 25px 0;
    & h2{
        margin: 0 10px 0 0;
        padding-bottom: 0;
    }
`

export const InpBox2 = styled(InpBox)`
    margin: initial;
`

export const CustomInp = styled.input`
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

export const CustomInp2 = styled(CustomInp)`
    font-size: 15px;
`

export const Line = styled.hr`
    width: 100%;
    height: 70px;
    background-color: none;
    border: none;
`

export const Marge = styled(Line)`
    height: 1px;
    background-color: #BBB5CD;
`

export const ProfilePageContainer = styled.div`
    width: 100%;
`

export const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
`

export const Phone = styled.a`
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-weight: 700;
    text-decoration: none;
    color: white;
`

export const Email = styled(Phone)`
    font-size: 12px;
    color: #bbb4ff;
`
