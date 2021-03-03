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
    margin-left:5%;

`

const Button = styled.button`

    cursor:pointer;
    border:0;
    border-radius:10px;
    color: #fff;
    margin-top:10px;
    width: 150px;
    height: 40px;
    background: #1C74D9;
    font-weight:bold;
    font-size:20px;

    &:hover {
        background-color: #fff;
        color: #000;
      }
`

function Banner(){

    return(
        <BannerSection>
            <h1>{JSON.titulo}</h1>
            <a>{JSON.subtitulo}</a>
            <Button>Saiba mais</Button>
        </BannerSection>
    )
}

export default Banner