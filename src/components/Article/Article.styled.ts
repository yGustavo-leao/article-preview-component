import styled from "styled-components";

export const Container = styled.article`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;

    @media (min-width: 500px) {
        flex-direction: row;
    }
`

export const ImgContainer = styled.div`
    display: flex;
`

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`

export const ContentContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    background-color: ${({theme}) => theme.colors.white};
`

export const Title = styled.h1`
    font-size: 1.1rem;
    color: ${({theme}) => theme.colors.blue_100};
`

export const Description = styled.p`
    font-size: .9rem;
    color: ${({theme}) => theme.colors.blue_200};
`

export const ArticleInfo = styled.div`
    display: grid;
    grid-template-areas:
    "userAvatar userName buttonShare"
    "userAvatar postDate buttonShare";
    grid-template-columns: max-content;
    column-gap: .8rem;
    margin-top: 1rem;
`

export const UserAvatar = styled.img`
    grid-area: userAvatar;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const UserName = styled.span`
    grid-area: userName;
    height: max-content;
    font-size: .8rem;
    font-weight: 700;
    align-self: flex-end;
    color: ${({theme}) => theme.colors.blue_100};
`

export const PostDate = styled.span`
    grid-area: postDate;
    font-size: .8rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.blue_200};
`

export const ShareButton = styled.button`
    grid-area: buttonShare;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    align-self: center;
    justify-self: end;
    border: none;
    cursor: pointer;
`

export const ShareImg = styled.img`
`