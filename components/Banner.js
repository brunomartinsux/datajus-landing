import styled from 'styled-components'
import JSON from '../Texts/Banner.JSON'

const BannerSection = styled.section`
    
    font-family: 'Ubuntu';
    display:flex;
    flex-direction:column;
    height:800px;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size:25px;
    background-color: #000;
    color: #fff;
    font-size:45px;

`

const Button = styled.button`

    cursor:pointer;
    border:0;
    border-radius:10px;
    color: #fff;
    margin-top:10px;
    width: 165px;
    height: 55px;
    background: #1C74D9;
    font-weight:bold;
    font-size:18px;

    &:hover {
        background-color: #fff;
        color: #000;
      }
`
const Container = styled.section`

      width:50%
`
const Title = styled.h1`

font-style: normal;
font-weight: bold;
font-size: 50px;
text-align: center;
letter-spacing: 0.3px;

`

const Subtitle = styled.a`

font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 36px;
/* or 180% */

text-align: center;
letter-spacing: 0.3px;

`

function Banner(){

    return(
        <BannerSection>
            <Container>
            <Title>{JSON.Banner1.titulo}</Title>    
            <Subtitle>{JSON.Banner1.subtitulo}</Subtitle>
            </Container>
            <Button>Saiba mais</Button>
        </BannerSection>
    )
}

export default Banner