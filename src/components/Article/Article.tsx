import { ArticleInfo, Container, ContentContainer, Description, Img, ImgContainer, PostDate, ShareButton, ShareImg, Title, UserAvatar, UserName } from "./Article.styled"

export const Article = () => {
    return (
        <Container>
            <ImgContainer>
                <Img src={`${process.env.PUBLIC_URL}/assets/images/drawers.jpg`} alt="drawers image" />
            </ImgContainer>

            <ContentContainer>
                <Title>Shift the overall look and feel by adding these wonderful touches to furniture in your home</Title>
                <Description>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</Description>

                <ArticleInfo>
                    <UserAvatar src={`${process.env.PUBLIC_URL}/assets/images/avatar-michelle.jpg`} alt="User image" />
                    <UserName>Michelle Appleton</UserName>
                    <PostDate>28 Jun 2020</PostDate>
                    <ShareButton>
                        <ShareImg src={`${process.env.PUBLIC_URL}/assets/images/icon-share.svg`} alt="Share icon" />
                    </ShareButton>
                </ArticleInfo>
            </ContentContainer>
        </Container>
    )
}