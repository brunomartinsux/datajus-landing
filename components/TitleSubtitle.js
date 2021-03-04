import styled from 'styled-components'
import JSON from '../Texts/Banner.JSON'

const BannerSection = styled.section`
    
    font-family: 'Ubuntu';
    display:flex;
    flex-direction:column;
    height:450px;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size:25px;
    background-color: #fff;
    color: #000

`

const Container = styled.section`

      width:50%
`

const Title = styled.h1`

height: 72px;
font-style: normal;
font-weight: bold;
font-size: 42px;
text-align: center;
letter-spacing: 0.3px;

color: #1E2327;

`

const Subtitle = styled.a`

font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 36px;
/* or 180% */

text-align: center;
letter-spacing: 0.3px;

color: #6A6E72;
`

function TitleSubtitle(){

    return(
        <BannerSection>
            <Container>
            <Title>{JSON.Banner2.titulo}</Title>    
            <Subtitle>{JSON.Banner2.subtitulo}</Subtitle>
            </Container>
        </BannerSection>
    )
}

export default TitleSubtitle